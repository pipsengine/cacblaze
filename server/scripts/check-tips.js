const { sequelize } = require('../src/config/database');

async function checkPublishedTips() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
    
    // Query for published tips
    const [results] = await sequelize.query(`
      SELECT 
        COUNT(*) as total_tips,
        SUM(CASE WHEN status = 'published' THEN 1 ELSE 0 END) as published_tips,
        SUM(CASE WHEN status = 'draft' THEN 1 ELSE 0 END) as draft_tips,
        SUM(CASE WHEN status = 'scheduled' THEN 1 ELSE 0 END) as scheduled_tips
      FROM tips 
      WHERE ai_generated = true
    `);
    
    console.log('Tip Statistics:', results[0]);
    
    // Get details of published tips
    const [publishedTips] = await sequelize.query(`
      SELECT id, title, status, published_at, created_at
      FROM tips 
      WHERE ai_generated = true AND status = 'published'
      ORDER BY published_at DESC
      LIMIT 10
    `);
    
    console.log('\nPublished Tips:');
    if (publishedTips.length === 0) {
      console.log('No published tips found');
    } else {
      publishedTips.forEach(tip => {
        console.log(`- ${tip.title} (${tip.status}, published: ${tip.published_at})`);
      });
    }
    
  } catch (error) {
    console.error('Error checking tips:', error);
  } finally {
    await sequelize.close();
  }
}

checkPublishedTips();