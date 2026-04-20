const fs = require('fs');
const path = require('path');
const { createServer } = require('http');
const next = require('next');

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || process.env.HOSTNAME || '0.0.0.0';

process.env.PORT = String(port);
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const standaloneCandidates = [
  path.join(__dirname, '.next', 'standalone', 'client', 'server.js'),
  path.join(__dirname, '.next', 'standalone', 'server.js'),
];

const standalone = standaloneCandidates.find((candidate) => fs.existsSync(candidate));

if (standalone) {
  require(standalone);
} else {
  const app = next({
    dev: false,
    dir: __dirname,
    conf: { distDir: '.next' },
  });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    createServer((req, res) => handle(req, res)).listen(port, host, () => {
      console.log(`CACBLAZE client listening on http://${host}:${port}`);
    });
  });
}
