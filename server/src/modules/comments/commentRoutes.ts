import { Router } from 'express';
import { getComments, createComment, updateComment, deleteComment, toggleReaction } from './commentController';
import { authenticateToken } from '../../middleware';

const router = Router();

// Public routes
router.get('/:articleId', getComments);

// Protected routes
router.post('/', authenticateToken, createComment);
router.put('/:id', authenticateToken, updateComment);
router.delete('/:id', authenticateToken, deleteComment);
router.post('/:id/reaction', authenticateToken, toggleReaction);

export default router;
