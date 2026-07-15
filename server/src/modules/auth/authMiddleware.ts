import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import {
  ensureLocalUserFromIdentity,
  getUserProfileByEmail,
  verifySupabaseAccessToken,
} from '../../services/supabase';
import { User } from '../../models';

type AuthenticatedRequest = Request & {
  user?: {
    id: number;
    email?: string | null;
    role: 'admin' | 'author' | 'user';
    externalId?: string;
    authProvider: 'local' | 'supabase';
  };
};

function verifyLocalJwt(token: string) {
  const secret =
    process.env.JWT_SECRET || (process.env.NODE_ENV === 'production' ? '' : 'default_secret_key');

  if (!secret) {
    return { misconfigured: true as const };
  }

  try {
    const decoded = jwt.verify(token, secret) as {
      id?: number;
      email?: string;
      role?: 'admin' | 'author' | 'user';
    };

    if (!decoded?.id) {
      return null;
    }

    return {
      misconfigured: false as const,
      user: {
        id: Number(decoded.id),
        email: decoded.email || null,
        role: decoded.role || 'user',
        authProvider: 'local' as const,
      },
    };
  } catch {
    return null;
  }
}

export const authenticateToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  const localResult = verifyLocalJwt(token);
  if (localResult?.misconfigured) {
    return res.status(500).json({ message: 'Server misconfigured' });
  }
  if (localResult?.user) {
    const localUser = await User.findByPk(localResult.user.id);
    if (!localUser) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    const profile = localUser.email ? await getUserProfileByEmail(localUser.email) : null;
    if (profile?.is_active === false) {
      return res.status(403).json({ message: 'Account is inactive. Contact administrator.' });
    }

    req.user = {
      id: Number(localUser.id),
      email: localUser.email || null,
      role: (profile?.role || localUser.role || 'user') as 'admin' | 'author' | 'user',
      authProvider: 'local',
    };
    return next();
  }

  try {
    const identity = await verifySupabaseAccessToken(token);
    if (!identity) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    if (!identity.is_active) {
      return res.status(403).json({ message: 'Account is inactive. Contact administrator.' });
    }

    const localUser = await ensureLocalUserFromIdentity(identity);
    req.user = {
      id: Number(localUser.id),
      email: localUser.email || identity.email,
      role: (localUser.role || identity.role) as 'admin' | 'author' | 'user',
      externalId: identity.id,
      authProvider: 'supabase',
    };

    return next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(500).json({ message: 'Authentication failed' });
  }
};

export const authorizeRoles = (...allowedRoles: Array<'admin' | 'author' | 'user'>) =>
  (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    return next();
  };
