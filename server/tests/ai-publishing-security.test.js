const assert = require('node:assert/strict');
const test = require('node:test');
const express = require('express');

const aiPublishingRoutes = require('../dist/modules/ai-publishing/aiPublishingRoutes').default;

async function withServer(run) {
  const app = express();
  app.use(express.json());
  app.use('/api/ai-publishing', aiPublishingRoutes);
  const server = app.listen(0, '127.0.0.1');
  await new Promise((resolve) => server.once('listening', resolve));

  try {
    const address = server.address();
    await run(`http://127.0.0.1:${address.port}`);
  } finally {
    await new Promise((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve()))
    );
  }
}

test('manual AI generation rejects anonymous callers', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/ai-publishing/generate/article`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ autoPublish: true }),
    });

    assert.equal(response.status, 401);
  });
});

test('batch generation and manual publishing reject anonymous callers', async () => {
  await withServer(async (baseUrl) => {
    const responses = await Promise.all([
      fetch(`${baseUrl}/api/ai-publishing/generate/batch`, { method: 'POST' }),
      fetch(`${baseUrl}/api/ai-publishing/publish/article/example`, { method: 'POST' }),
      fetch(`${baseUrl}/api/ai-publishing/validate-all`, { method: 'POST' }),
    ]);

    assert.deepEqual(
      responses.map((response) => response.status),
      [401, 401, 401]
    );
  });
});
