const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'server/database/cacblaze.db');
const db = new sqlite3.Database(dbPath);

console.log('Checking tips in database...');

// Check tips
db.get("SELECT COUNT(*) as count FROM tips", (err, row) => {
  if (err) {
    console.log('Tips table may not exist or have issues');
    db.close();
    return;
  }
  
  console.log('Total tips:', row.count);
  
  // Check tip status
  db.all("SELECT status, COUNT(*) as count FROM tips GROUP BY status", (err, rows) => {
    if (!err && rows) {
      rows.forEach(row => {
        console.log(`Tips with status '${row.status}': ${row.count}`);
      });
    }
    
    // Check word counts
    db.get("SELECT AVG(word_count) as avg_words FROM tips", (err, row) => {
      if (!err && row) {
        console.log('Average word count for tips:', Math.round(row.avg_words || 0));
      }
      
      // Check published content
      db.get("SELECT COUNT(*) as count FROM tips WHERE status = 'published'", (err, row) => {
        if (!err) {
          console.log('Published tips available:', row.count);
        }
        
        db.get("SELECT COUNT(*) as count FROM articles WHERE status = 'published'", (err, row) => {
          if (!err) {
            console.log('Published articles available:', row.count);
          }
          db.close();
        });
      });
    });
  });
});