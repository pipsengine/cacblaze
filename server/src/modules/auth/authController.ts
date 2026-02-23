import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../../models';
import { Op } from 'sequelize';
import { getUserProfileByEmail, upsertUserProfile } from '../../services/supabase';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body; // Changed from username to email to match frontend
    
    // Allow login with either username or email
    const user = await User.findOne({ 
      where: { 
        [Op.or]: [
          { email: email },
          { username: email } // In case they send username in email field
        ]
      } 
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

    const token = jwt.sign({ id: user.id, role: effectiveRole }, process.env.JWT_SECRET || 'default_secret_key', {
      expiresIn: '1d',
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

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Generate username from email if not provided
    const finalUsername = username || email.split('@')[0];

    const user = await User.create({
      email,
      password,
      username: finalUsername,
      role: 'user'
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

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'default_secret_key', {
      expiresIn: '1d',
    });

    res.status(201).json({ token, user: { id: user.id, username: user.username, email: user.email, role: user.role } });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const userId = req.user.id;
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
