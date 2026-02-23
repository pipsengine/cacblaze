const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'server/database/cacblaze.db');
const db = new sqlite3.Database(dbPath);

console.log('Fixing article images with proper placeholder images...');

// Use realistic placeholder images from a reliable service
const placeholderImages = [
  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop'
];

// Get all articles to update
db.all("SELECT id, title FROM articles", (err, articles) => {
  if (err) {
    console.error('Error fetching articles:', err);
    db.close();
    return;
  }
  
  console.log(`Updating ${articles.length} articles with proper images...`);
  
  articles.forEach((article, index) => {
    const imageUrl = placeholderImages[index % placeholderImages.length];
    const altText = `Featured image for ${article.title}`;
    
    db.run(
      `UPDATE articles SET featured_image_url = ?, image_alt = ? WHERE id = ?`,
      [imageUrl, altText, article.id],
      function(err) {
        if (err) {
          console.error(`Error updating article ${article.id}:`, err);
        } else {
          console.log(`✅ Updated: ${article.title}`);
          console.log(`   Image: ${imageUrl}`);
        }
        
        // Close connection after last update
        if (index === articles.length - 1) {
          setTimeout(() => {
            console.log('\n🎉 All article images have been updated!');
            console.log('The images should now render correctly on the homepage.');
            db.close();
          }, 100);
        }
      }
    );
  });
});