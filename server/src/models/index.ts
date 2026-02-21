import User from '../modules/users/User';
import Comment from '../modules/comments/Comment';
import Reaction from '../modules/comments/Reaction';
import Article from '../modules/articles/Article';
import Tip from '../modules/tips/Tip';
import ArticleImage from '../modules/images/ArticleImage';

// Associations
User.hasMany(Comment, { foreignKey: 'userId', as: 'comments' });
Comment.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Comment.hasMany(Reaction, { foreignKey: 'commentId', as: 'reactions' });
Reaction.belongsTo(Comment, { foreignKey: 'commentId', as: 'comment' });

User.hasMany(Reaction, { foreignKey: 'userId', as: 'reactions' });
Reaction.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Comment.hasMany(Comment, { foreignKey: 'parentId', as: 'replies' });
Comment.belongsTo(Comment, { foreignKey: 'parentId', as: 'parent' });

// AI Publishing Engine Associations
Article.hasMany(ArticleImage, { foreignKey: 'article_id', as: 'images' });
ArticleImage.belongsTo(Article, { foreignKey: 'article_id', as: 'article' });

User.hasMany(Article, { foreignKey: 'author_id', as: 'articles' });
Article.belongsTo(User, { foreignKey: 'author_id', as: 'author' });

export { User, Comment, Reaction, Article, Tip, ArticleImage };
