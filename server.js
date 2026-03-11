const path = require('path');
const nextApp = path.join(__dirname, 'client', 'server.js');

try {
  require(nextApp);
} catch (err) {
  console.error('Failed to start client/server.js:', err);
  process.exit(1);
}
