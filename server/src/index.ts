import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDB } from './config/database';
import { seedAdmin } from './config/seed';
import routes from './routes';
import { runSupabaseBootstrap } from './services/supabaseBootstrap';

const app = express();
const DEFAULT_PORT = Number(process.env.PORT || 3001);
const MAX_PORT_RETRIES = Number(process.env.PORT_RETRY_COUNT || 10);
const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet());
app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : true,
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json({ limit: '1mb' }));

app.use('/api', routes);

app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    port: Number(process.env.PORT || DEFAULT_PORT),
    timestamp: new Date().toISOString(),
  });
});

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack || err.message);
  res.status(500).json({ error: 'Something went wrong!' });
});

function startListening(startPort: number): Promise<number> {
  const allowPortRetry =
    process.env.NODE_ENV !== 'production' && process.env.STRICT_PORT !== 'true';

  return new Promise((resolve, reject) => {
    const tryListen = (port: number, retriesLeft: number) => {
      const server = app.listen(port, () => {
        process.env.PORT = String(port);
        console.log(`Server is running on port ${port}`);
        resolve(port);
      });

      server.once('error', (error: NodeJS.ErrnoException) => {
        if (error.code === 'EADDRINUSE' && allowPortRetry && retriesLeft > 0) {
          console.warn(`[Server] Port ${port} is already in use. Retrying on ${port + 1}...`);
          tryListen(port + 1, retriesLeft - 1);
          return;
        }

        if (error.code === 'EADDRINUSE') {
          reject(
            new Error(
              `Port ${port} is already in use. Stop the existing process or set PORT to a free value.`
            )
          );
          return;
        }

        reject(error);
      });
    };

    tryListen(startPort, MAX_PORT_RETRIES);
  });
}

async function start() {
  try {
    await runSupabaseBootstrap();
    await connectDB();
    await seedAdmin();
    await startListening(DEFAULT_PORT);
  } catch (error) {
    console.error('Server failed to start:', error);
    process.exit(1);
  }
}

void start();
