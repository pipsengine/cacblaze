import { Router } from 'express';
import { login, register, getMe } from './authController';
import { authenticateToken } from './authMiddleware';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/me', authenticateToken, getMe);

export default router;
