const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../database/cacblaze.db');
const db = new sqlite3.Database(dbPath);

console.log('Checking for tips in database...');

// Check if tips table exists
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='tips'", (err, row) => {
  if (err) {
    console.error('Error checking for tips table:', err);
    db.close();
    return;
  }
  
  if (!row) {
    console.log('Tips table does not exist yet');
    db.close();
    return;
  }
  
  console.log('Tips table exists');
  
  // Count total tips
  db.get("SELECT COUNT(*) as count FROM tips", (err, row) => {
    if (err) {
      console.error('Error counting tips:', err);
      db.close();
      return;
    }
    
    console.log('Total tips in database:', row.count);
    
    // Count AI-generated tips
    db.get("SELECT COUNT(*) as count FROM tips WHERE ai_generated = 1", (err, row) => {
      if (err) {
        console.error('Error counting AI tips:', err);
        db.close();
        return;
      }
      
      console.log('AI-generated tips:', row.count);
      
      // Check published tips
      db.get("SELECT COUNT(*) as count FROM tips WHERE ai_generated = 1 AND status = 'published'", (err, row) => {
        if (err) {
          console.error('Error counting published tips:', err);
          db.close();
          return;
        }
        
        console.log('Published AI tips:', row.count);
        
        // Get some example tips if they exist
        if (row.count > 0) {
          db.all("SELECT id, title, status, published_at FROM tips WHERE ai_generated = 1 AND status = 'published' ORDER BY published_at DESC LIMIT 5", (err, rows) => {
            if (err) {
              console.error('Error fetching tips:', err);
            } else {
              console.log('\nRecent published tips:');
              rows.forEach(tip => {
                console.log(`- ${tip.title} (${tip.status}, published: ${tip.published_at})`);
              });
            }
            db.close();
          });
        } else {
          console.log('No published AI tips found');
          db.close();
        }
      });
    });
  });
});