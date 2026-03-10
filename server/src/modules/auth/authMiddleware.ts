import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  const secret =
    process.env.JWT_SECRET || (process.env.NODE_ENV === 'production' ? '' : 'default_secret_key');
  if (!secret) {
    return res.status(500).json({ message: 'Server misconfigured' });
  }

  jwt.verify(token, secret, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    // @ts-ignore
    req.user = user;
    next();
  });
};
