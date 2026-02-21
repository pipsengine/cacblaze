import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/database';

export interface ArticleAttributes {
  id: string;
  author_id: string;
  title: string;
  slug: string;
  content: string;
  meta_description: string;
  category: string;
  tags: string[];
  geo_focus: 'Nigeria' | 'Africa' | 'Global';
  type: 'Guide' | 'HowTo' | 'Review' | 'Education' | 'Technology' | 'Lifestyle';
  status: 'draft' | 'published' | 'scheduled' | 'rejected';
  featured_image_url?: string;
  image_alt?: string;
  word_count: number;
  readability_score: number;
  ai_generated: boolean;
  validation_passed: boolean;
  validation_errors?: string[];
  scheduled_publish_date?: Date;
  published_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface ArticleCreationAttributes extends Optional<ArticleAttributes, 'id' | 'author_id' | 'created_at' | 'updated_at'> {}

export class Article extends Model<ArticleAttributes, ArticleCreationAttributes> implements ArticleAttributes {
  public id!: string;
  public author_id!: string;
  public title!: string;
  public slug!: string;
  public content!: string;
  public meta_description!: string;
  public category!: string;
  public tags!: string[];
  public geo_focus!: 'Nigeria' | 'Africa' | 'Global';
  public type!: 'Guide' | 'HowTo' | 'Review' | 'Education' | 'Technology' | 'Lifestyle';
  public status!: 'draft' | 'published' | 'scheduled' | 'rejected';
  public featured_image_url?: string;
  public image_alt?: string;
  public word_count!: number;
  public readability_score!: number;
  public ai_generated!: boolean;
  public validation_passed!: boolean;
  public validation_errors?: string[];
  public scheduled_publish_date?: Date;
  public published_at?: Date;
  public created_at!: Date;
  public updated_at!: Date;
}

Article.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    author_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(500),
      allowNull: false,
      unique: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    meta_description: {
      type: DataTypes.STRING(160),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    tags: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    geo_focus: {
      type: DataTypes.ENUM('Nigeria', 'Africa', 'Global'),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('Guide', 'HowTo', 'Review', 'Education', 'Technology', 'Lifestyle'),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('draft', 'published', 'scheduled', 'rejected'),
      allowNull: false,
      defaultValue: 'draft',
    },
    featured_image_url: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    image_alt: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    word_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    readability_score: {
      type: DataTypes.FLOAT,
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
    tableName: 'articles',
    timestamps: true,
    underscored: true,
  }
);

export default Article;