import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/database';

export interface TipAttributes {
  id: string;
  title: string;
  content: string;
  category: string;
  status: 'draft' | 'published' | 'scheduled' | 'rejected';
  word_count: number;
  ai_generated: boolean;
  validation_passed: boolean;
  validation_errors?: string[];
  scheduled_publish_date?: Date;
  published_at?: Date;
  featured_image?: string;
  image_alt?: string;
  created_at: Date;
  updated_at: Date;
}

export interface TipCreationAttributes extends Optional<TipAttributes, 'id' | 'created_at' | 'updated_at'> {}

export class Tip extends Model<TipAttributes, TipCreationAttributes> implements TipAttributes {
  public id!: string;
  public title!: string;
  public content!: string;
  public category!: string;
  public status!: 'draft' | 'published' | 'scheduled' | 'rejected';
  public word_count!: number;
  public ai_generated!: boolean;
  public validation_passed!: boolean;
  public validation_errors?: string[];
  public scheduled_publish_date?: Date;
  public published_at?: Date;
  public featured_image?: string;
  public image_alt?: string;
  public created_at!: Date;
  public updated_at!: Date;
}

Tip.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('draft', 'published', 'scheduled', 'rejected'),
      allowNull: false,
      defaultValue: 'draft',
    },
    word_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    ai_generated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    validation_passed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    validation_errors: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    scheduled_publish_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    published_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    featured_image: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    image_alt: {
      type: DataTypes.STRING(200),
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
    tableName: 'tips',
    timestamps: true,
    underscored: true,
  }
);

export default Tip;