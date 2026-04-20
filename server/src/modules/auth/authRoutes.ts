import { Router } from 'express';
import { login, register, getMe } from './authController';
import { authenticateToken } from './authMiddleware';
import { createRateLimiter } from '../../middleware/rateLimit';

const router = Router();
const authLoginLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  keyPrefix: 'auth-login',
  message: 'Too many login attempts. Please wait and try again.',
});
const authRegisterLimiter = createRateLimiter({
  windowMs: 60 * 60 * 1000,
  max: 5,
  keyPrefix: 'auth-register',
  message: 'Too many registration attempts. Please try again later.',
});

router.post('/login', authLoginLimiter, login);
router.post('/register', authRegisterLimiter, register);
router.get('/me', authenticateToken, getMe);

export default router;
