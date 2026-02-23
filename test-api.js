const http = require('http');

console.log('Testing API endpoint for article by slug...');

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/ai-publishing/articles/slug/remote-work-opportunities-across-africa',
  method: 'GET',
  timeout: 5000
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      console.log('API Response:', response);
    } catch (error) {
      console.log('Raw Response:', data);
    }
  });
});

req.on('error', (error) => {
  console.error('API Error:', error.message);
  console.log('The server might not be running on port 3001');
});

req.on('timeout', () => {
  console.error('Request timeout - server not responding');
  req.destroy();
});

req.end();