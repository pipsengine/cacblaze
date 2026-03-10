import { User } from '../models';

export const seedAdmin = async () => {
  try {
    if (process.env.SEED_ADMIN !== 'true') {
      return;
    }

    const username = process.env.ADMIN_SEED_USERNAME || 'cacblaze';
    const password = process.env.ADMIN_SEED_PASSWORD;
    const email = process.env.ADMIN_SEED_EMAIL || 'admin@cacsms.com';

    if (!password) {
      throw new Error('ADMIN_SEED_PASSWORD is required when SEED_ADMIN=true');
    }

    const adminExists = await User.findOne({ where: { username } });
    if (!adminExists) {
      await User.create({
        username,
        password,
        email,
        role: 'admin',
      });
      console.log('Admin user seeded successfully.');
    } else {
      console.log('Admin user already exists.');
    }
  } catch (error) {
    console.error('Error seeding admin user:', error);
  }
};
