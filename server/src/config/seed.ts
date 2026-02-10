import { User } from '../models';

export const seedAdmin = async () => {
  try {
    const adminExists = await User.findOne({ where: { username: 'cacblaze' } });
    if (!adminExists) {
      await User.create({
        username: 'cacblaze',
        password: '@dm1n.c0m', // Will be hashed by hooks
        email: 'admin@cacblaze.com',
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
