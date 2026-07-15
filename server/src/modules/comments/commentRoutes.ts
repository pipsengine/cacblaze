import { Router } from 'express';
import { getComments, createComment, updateComment, deleteComment, toggleReaction } from './commentController';
import { authenticateToken } from '../../middleware';
import { createRateLimiter } from '../../middleware/rateLimit';

const router = Router();
const commentWriteLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 12,
  keyPrefix: 'comments-write',
  message: 'Too many comment actions. Please wait and try again.',
});

// Public routes
router.get('/:articleId', getComments);

// Protected routes
router.post('/', commentWriteLimiter, authenticateToken, createComment);
router.put('/:id', commentWriteLimiter, authenticateToken, updateComment);
router.delete('/:id', commentWriteLimiter, authenticateToken, deleteComment);
router.post('/:id/reaction', commentWriteLimiter, authenticateToken, toggleReaction);

export default router;
