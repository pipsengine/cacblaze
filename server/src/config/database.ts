import { Sequelize } from 'sequelize';
import path from 'path';

function createSequelize(): Sequelize {
  const databaseUrl = process.env.DATABASE_URL;
  const pgHost = process.env.POSTGRES_HOST || process.env.PGHOST;
  const pgPort = Number(process.env.POSTGRES_PORT || process.env.PGPORT || '5432');
  const pgUser = process.env.POSTGRES_USER || process.env.PGUSER;
  const pgPassword = process.env.POSTGRES_PASSWORD || process.env.PGPASSWORD;
  const pgDatabase = process.env.POSTGRES_DATABASE || process.env.PGDATABASE;
  const requireManagedDb =
    process.env.NODE_ENV === 'production' && process.env.REQUIRE_MANAGED_DB === 'true';

  if (databaseUrl) {
    const useSSL = (process.env.POSTGRES_SSL || '').toLowerCase() === 'true';
    return new Sequelize(databaseUrl, {
      dialect: 'postgres',
      protocol: 'postgres',
      logging: false,
      dialectOptions: useSSL
        ? {
            ssl: { require: true, rejectUnauthorized: false },
          }
        : {},
    });
  }

  if (pgHost && pgUser && pgPassword && pgDatabase) {
    const useSSL = (process.env.POSTGRES_SSL || '').toLowerCase() === 'true';
    return new Sequelize(pgDatabase, pgUser, pgPassword, {
      host: pgHost,
      port: pgPort,
      dialect: 'postgres',
      logging: false,
      dialectOptions: useSSL
        ? {
            ssl: { require: true, rejectUnauthorized: false },
          }
        : {},
    });
  }

  const storagePath =
    process.env.SQLITE_PATH || path.resolve(process.cwd(), 'database', 'cacblaze.db');

  if (requireManagedDb) {
    throw new Error(
      'Managed Postgres is required in production. Set DATABASE_URL or POSTGRES_* variables.'
    );
  }

  if (process.env.NODE_ENV === 'production') {
    console.warn(`[Database] Postgres env not found. Falling back to SQLite at ${storagePath}`);
  }

  return new Sequelize({
    dialect: 'sqlite',
    storage: storagePath,
    logging: false,
  });
}

export const sequelize = createSequelize();

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`[Database] Connected successfully using ${sequelize.getDialect()}`);
    return sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
};
