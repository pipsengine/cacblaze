const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'server/database/cacblaze.db');
const db = new sqlite3.Database(dbPath);

console.log('Checking article images in database...');

// Check what images are stored for articles
db.all("SELECT id, title, featured_image_url, image_alt FROM articles", (err, rows) => {
  if (err) {
    console.error('Error fetching articles:', err);
    db.close();
    return;
  }
  
  console.log('Article image details:');
  console.log('----------------------');
  
  rows.forEach((row, index) => {
    console.log(`\nArticle ${index + 1}:`);
    console.log(`Title: ${row.title}`);
    console.log(`Image URL: ${row.featured_image_url || 'NULL'}`);
    console.log(`Alt Text: ${row.image_alt || 'NULL'}`);
    
    if (row.featured_image_url) {
      console.log(`Image accessible: ${row.featured_image_url.startsWith('http') ? 'Yes (external)' : 'Unknown'}`);
    }
  });
  
  db.close();
});