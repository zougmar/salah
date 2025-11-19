import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const createDefaultAdmin = async () => {
  try {
    // Check if admin already exists
    const adminExists = await User.findOne({ email: 'admin@manager.com' });

    if (!adminExists) {
      // Create admin user
      const admin = new User({
        name: 'Admin',
        username: 'admin',
        email: 'admin@manager.com',
        password: 'AdminSecure2023!',
        role: 'admin',
        position: 'System Administrator'
      });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(admin.password, salt);

      await admin.save();
      console.log('Default admin created successfully');
      console.log('Email: admin@manager.com');
      console.log('Password: AdminSecure2023!');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
};

export default createDefaultAdmin;
