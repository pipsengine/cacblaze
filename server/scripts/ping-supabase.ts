import 'dotenv/config';
import { Client } from 'pg';

async function main() {
  const host = process.env.POSTGRES_HOST || process.env.Cacblaze_POSTGRES_HOST;
  const database = process.env.POSTGRES_DATABASE || process.env.Cacblaze_POSTGRES_DATABASE;
  const user = process.env.POSTGRES_USER || process.env.Cacblaze_POSTGRES_USER;
  const password = process.env.POSTGRES_PASSWORD || process.env.Cacblaze_POSTGRES_PASSWORD;

  let client: Client;
  if (host && database && user && password) {
    client = new Client({
      host,
      port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
      database,
      user,
      password,
      ssl: { rejectUnauthorized: false },
    });
  } else {
    const url =
      process.env.POSTGRES_URL_NON_POOLING ||
      process.env.POSTGRES_URL ||
      process.env.Cacblaze_POSTGRES_URL_NON_POOLING ||
      process.env.Cacblaze_POSTGRES_URL;
    if (!url) {
      console.error('Missing POSTGRES_URL[_NON_POOLING] or discrete POSTGRES_* parameters');
      process.exit(2);
    }
    client = new Client({
      connectionString: url,
      ssl: { rejectUnauthorized: false },
    });
  }
  try {
    await client.connect();
    const res = await client.query('select now() as now');
    const now = res.rows?.[0]?.now;
    console.log(
      JSON.stringify(
        {
          reachable: !!now,
          serverTime: now,
        },
        null,
        2
      )
    );
    process.exit(0);
  } catch (e: any) {
    console.error(
      JSON.stringify(
        {
          reachable: false,
          error: e?.message || 'Unknown error',
        },
        null,
        2
      )
    );
    process.exit(1);
  } finally {
    try {
      await client.end();
    } catch {}
  }
}

main();
