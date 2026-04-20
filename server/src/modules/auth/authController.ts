import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../../models';
import { Op } from 'sequelize';
import { getUserProfileByEmail, upsertUserProfile } from '../../services/supabase';

type AuthenticatedRequest = Request & {
  user?: {
    id: number;
    role: 'admin' | 'author' | 'user';
    email?: string | null;
  };
};

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function isStrongPassword(password: string) {
  return (
    password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password)
  );
}

function sanitizeUsername(value: string) {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');

  return normalized || 'user';
}

async function buildAvailableUsername(baseValue: string) {
  const base = sanitizeUsername(baseValue);
  let candidate = base;
  let suffix = 1;

  while (await User.findOne({ where: { username: candidate } })) {
    suffix += 1;
    candidate = `${base}${suffix}`;
  }

  return candidate;
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const rawIdentifier = String(email).trim();
    const normalizedEmail = normalizeEmail(rawIdentifier);

    // Allow login with either username or email
    const user = await User.findOne({
      where: {
        [Op.or]: [{ email: normalizedEmail }, { username: rawIdentifier }],
      },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Overlay role/status from Supabase profile if available
    let effectiveRole = user.role;
    const profile = user.email ? await getUserProfileByEmail(user.email) : null;
    if (profile) {
      if (profile.is_active === false) {
        return res.status(403).json({ message: 'Account is inactive. Contact administrator.' });
      }
      effectiveRole = profile.role || user.role;
    }

    const secret =
      process.env.JWT_SECRET || (process.env.NODE_ENV === 'production' ? '' : 'default_secret_key');
    if (!secret) {
      return res.status(500).json({ message: 'Server misconfigured' });
    }

    const jwtExpiresIn = (process.env.JWT_EXPIRES_IN || '1d') as jwt.SignOptions['expiresIn'];
    const token = jwt.sign({ id: user.id, role: effectiveRole }, secret, {
      expiresIn: jwtExpiresIn,
    });

    res.json({ token, user: { id: user.id, username: user.username, email: user.email, role: effectiveRole } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, fullName, username } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const normalizedEmail = normalizeEmail(String(email));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return res.status(400).json({ message: 'Please provide a valid email address' });
    }

    if (!isStrongPassword(String(password))) {
      return res.status(400).json({
        message:
          'Password must be at least 8 characters and include uppercase, lowercase, and a number',
      });
    }

    if (!fullName || String(fullName).trim().length < 2) {
      return res.status(400).json({ message: 'Please provide your full name' });
    }

    const existingUser = await User.findOne({ where: { email: normalizedEmail } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const finalUsername = await buildAvailableUsername(username || normalizedEmail.split('@')[0]);

    const user = await User.create({
      email: normalizedEmail,
      password,
      username: finalUsername,
      role: 'user',
    });

    // Ensure a Supabase profile exists for admin management
    try {
      if (email) {
        await upsertUserProfile({
          email,
          full_name: fullName || finalUsername,
          role: 'user',
          is_active: true,
        });
      }
    } catch (e) {
      // Non-fatal if Supabase is not configured
      console.error('Profile upsert skipped:', e instanceof Error ? e.message : e);
    }

    const secret =
      process.env.JWT_SECRET || (process.env.NODE_ENV === 'production' ? '' : 'default_secret_key');
    if (!secret) {
      return res.status(500).json({ message: 'Server misconfigured' });
    }

    const jwtExpiresIn = (process.env.JWT_EXPIRES_IN || '1d') as jwt.SignOptions['expiresIn'];
    const token = jwt.sign({ id: user.id, role: user.role }, secret, {
      expiresIn: jwtExpiresIn,
    });

    res.status(201).json({ token, user: { id: user.id, username: user.username, email: user.email, role: user.role } });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getMe = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const user = await User.findByPk(userId, {
      attributes: ['id', 'username', 'email', 'role']
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Overlay role/status from Supabase profile if available
    let result: any = user.toJSON();
    try {
      if (result.email) {
        const profile = await getUserProfileByEmail(result.email);
        if (profile) {
          if (profile.is_active === false) {
            return res.status(403).json({ message: 'Account is inactive. Contact administrator.' });
          }
          result.role = profile.role || result.role;
          result.username = result.username || profile.full_name;
        }
      }
    } catch {}

    res.json(result);
  } catch (error) {
    console.error('Get Me error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
