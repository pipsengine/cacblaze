import { Request, Response } from 'express';
import { Comment, User, Reaction } from '../../models';

type AuthenticatedRequest = Request & {
  user?: {
    id: number;
    role: 'admin' | 'author' | 'user';
    email?: string | null;
  };
};

export const getComments = async (req: Request, res: Response) => {
  try {
    const { articleId } = req.params;
    const comments = await Comment.findAll({
      where: { articleId, status: 'approved' },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['username', 'role'], // Add avatar if available in User model
        },
        {
          model: Reaction,
          as: 'reactions',
          attributes: ['id', 'commentId', 'userId', 'reactionType'],
        },
      ],
      order: [['createdAt', 'ASC']],
    });

    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createComment = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { articleId, content, parentId } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (!articleId || typeof content !== 'string' || !content.trim()) {
      return res.status(400).json({ message: 'articleId and content are required' });
    }

    const comment = await Comment.create({
      articleId,
      userId,
      content: content.trim(),
      parentId: parentId || null,
      status: 'approved',
    });

    const newComment = await Comment.findByPk(comment.id, {
      include: [
        {
            model: User,
            as: 'user',
            attributes: ['username', 'role'],
        },
      ],
    });

    res.status(201).json(newComment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateComment = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (typeof content !== 'string' || !content.trim()) {
      return res.status(400).json({ message: 'Content is required' });
    }

    const comment = await Comment.findOne({ where: { id, userId } });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found or unauthorized' });
    }

    comment.content = content.trim();
    await comment.save();

    res.json(comment);
  } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteComment = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const comment = await Comment.findOne({ where: { id, userId } });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found or unauthorized' });
    }

    await comment.destroy();

    res.json({ message: 'Comment deleted' });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const toggleReaction = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { reactionType } = req.body;
    const userId = req.user?.id;
    const allowedReactions = new Set(['like', 'helpful', 'insightful', 'love']);

    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (typeof reactionType !== 'string' || !allowedReactions.has(reactionType)) {
      return res.status(400).json({ message: 'Invalid reaction type' });
    }

    const existingReaction = await Reaction.findOne({
      where: { commentId: id, userId, reactionType },
    });

    if (existingReaction) {
      await existingReaction.destroy();
      return res.json({ message: 'Reaction removed' });
    }

    await Reaction.create({
      commentId: Number(id),
      userId,
      reactionType,
    });

    res.json({ message: 'Reaction added' });
  } catch (error) {
    console.error('Error toggling reaction:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
