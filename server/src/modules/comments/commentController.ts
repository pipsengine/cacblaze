import { Request, Response } from 'express';
import { Comment, User, Reaction } from '../../models';

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

export const createComment = async (req: Request, res: Response) => {
  try {
    const { articleId, content, parentId } = req.body;
    // @ts-ignore - user is attached by auth middleware
    const userId = req.user.id; 

    const comment = await Comment.create({
      articleId,
      userId,
      content,
      parentId: parentId || null,
      status: 'approved', // Auto-approve for now
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

export const updateComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    // @ts-ignore
    const userId = req.user.id;

    const comment = await Comment.findOne({ where: { id, userId } });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found or unauthorized' });
    }

    comment.content = content;
    await comment.save();

    res.json(comment);
  } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // @ts-ignore
    const userId = req.user.id;

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

export const toggleReaction = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // commentId
    const { reactionType } = req.body;
    // @ts-ignore
    const userId = req.user.id;

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
