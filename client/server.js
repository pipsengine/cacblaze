const path = require('path');
const { createServer } = require('http');
const next = require('next');
const port = process.env.PORT || 3000;
process.env.PORT = String(port);
const standalone = path.join(__dirname, '.next', 'standalone', 'server.js');
let started = false;
try {
  require(standalone);
  started = true;
} catch (_) {}
if (!started) {
  const dev = false;
  const app = next({ dev, conf: { distDir: '.next' } });
  const handle = app.getRequestHandler();
const host = process.env.HOST || '0.0.0.0';
  app.prepare().then(() => {
    createServer((req, res) => handle(req, res)).listen(port, host);
  });
}
