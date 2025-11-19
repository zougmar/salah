import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected to:', process.env.MONGODB_URI);
  } catch (error) {
    console.error('MongoDB connection failed for:', process.env.MONGODB_URI);
    process.exit(1);
  }
};

export default connectDB;
