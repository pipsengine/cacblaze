const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'server/database/cacblaze.db');
const db = new sqlite3.Database(dbPath);

console.log('Checking database contents...');

// Check tables
db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, tables) => {
  if (err) {
    console.error('Error checking tables:', err);
    db.close();
    return;
  }
  
  console.log('Tables found:', tables.map(t => t.name).join(', '));
  
  // Check articles
  db.get("SELECT COUNT(*) as count FROM articles", (err, row) => {
    if (err) {
      console.log('Articles table may not exist yet');
    } else {
      console.log('Total articles:', row.count);
      
      // Check article status
      db.all("SELECT status, COUNT(*) as count FROM articles GROUP BY status", (err, rows) => {
        if (!err && rows) {
          rows.forEach(row => {
            console.log(`Articles with status '${row.status}': ${row.count}`);
          });
        }
        
        // Check word counts
        db.get("SELECT AVG(word_count) as avg_words FROM articles", (err, row) => {
          if (!err && row) {
            console.log('Average word count:', Math.round(row.avg_words || 0));
          }
          db.close();
        });
      });
    }
  });
});