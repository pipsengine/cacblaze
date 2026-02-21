import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/database';

export interface ArticleImageAttributes {
  id: string;
  article_id: string;
  image_url: string;
  alt_text: string;
  type: 'featured' | 'supporting';
  ai_generated: boolean;
  prompt_used?: string;
  created_at: Date;
  updated_at: Date;
}

export interface ArticleImageCreationAttributes extends Optional<ArticleImageAttributes, 'id' | 'created_at' | 'updated_at'> {}

export class ArticleImage extends Model<ArticleImageAttributes, ArticleImageCreationAttributes> implements ArticleImageAttributes {
  public id!: string;
  public article_id!: string;
  public image_url!: string;
  public alt_text!: string;
  public type!: 'featured' | 'supporting';
  public ai_generated!: boolean;
  public prompt_used?: string;
  public created_at!: Date;
  public updated_at!: Date;
}

ArticleImage.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    article_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'articles',
        key: 'id',
      },
    },
    image_url: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    alt_text: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('featured', 'supporting'),
      allowNull: false,
    },
    ai_generated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    prompt_used: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'article_images',
    timestamps: true,
    underscored: true,
  }
);

export default ArticleImage;