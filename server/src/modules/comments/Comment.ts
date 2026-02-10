import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../config/database';

class Comment extends Model {
  public id!: number;
  public articleId!: string;
  public userId!: number;
  public parentId!: number | null;
  public content!: string;
  public status!: string;
  public isAuthorResponse!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    articleId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'article_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'parent_id'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'approved',
    },
    isAuthorResponse: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_author_response'
    },
  },
  {
    sequelize,
    tableName: 'comments',
  }
);

export default Comment;
