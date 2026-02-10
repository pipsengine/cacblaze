import { Router } from 'express';
import authRoutes from '../modules/auth/authRoutes';
import commentRoutes from '../modules/comments/commentRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/comments', commentRoutes);

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the CACBlaze API' });
});

export default router;
