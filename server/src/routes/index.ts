import { Router } from 'express';
import authRoutes from '../modules/auth/authRoutes';
import commentRoutes from '../modules/comments/commentRoutes';
import aiPublishingRoutes from '../modules/ai-publishing/aiPublishingRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/comments', commentRoutes);
router.use('/ai-publishing', aiPublishingRoutes);

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the CACBlaze API' });
});

export default router;
