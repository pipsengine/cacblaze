const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'server/database/cacblaze.db');
const db = new sqlite3.Database(dbPath);

console.log('Fixing article slugs for proper URL routing...');

// Function to generate URL-friendly slugs
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, '-')        // Replace spaces with hyphens
    .replace(/-+/g, '-')         // Remove consecutive hyphens
    .substring(0, 100);          // Limit length
}

// Get all articles to update slugs
db.all("SELECT id, title FROM articles", (err, articles) => {
  if (err) {
    console.error('Error fetching articles:', err);
    db.close();
    return;
  }
  
  console.log(`Updating slugs for ${articles.length} articles...`);
  
  articles.forEach((article, index) => {
    const slug = generateSlug(article.title);
    
    db.run(
      `UPDATE articles SET slug = ? WHERE id = ?`,
      [slug, article.id],
      function(err) {
        if (err) {
          console.error(`Error updating article ${article.id}:`, err);
        } else {
          console.log(`✅ Updated: ${article.title}`);
          console.log(`   Slug: ${slug}`);
        }
        
        // Close connection after last update
        if (index === articles.length - 1) {
          setTimeout(() => {
            console.log('\n🎉 All article slugs have been updated!');
            console.log('Article detail pages should now work with URLs like:');
            console.log('http://localhost:3000/guides/remote-work-opportunities-across-africa');
            db.close();
          }, 100);
        }
      }
    );
  });
});