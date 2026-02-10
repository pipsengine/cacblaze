import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../config/database';

class Reaction extends Model {
  public id!: number;
  public commentId!: number;
  public userId!: number;
  public reactionType!: string;
}

Reaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'comment_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    reactionType: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'reaction_type'
    },
  },
  {
    sequelize,
    tableName: 'reactions',
  }
);

export default Reaction;
