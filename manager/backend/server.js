import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
import connectDB from './config/db.js';
import createDefaultAdmin from './config/defaultAdmin.js';

// Load env vars
dotenv.config();

// Debug environment variables
console.log('Environment variables loaded:');
console.log('- JWT_SECRET:', process.env.JWT_SECRET ? 'exists' : 'missing');
console.log('- MONGODB_URI:', process.env.MONGODB_URI ? 'exists' : 'missing');
console.log('- PORT:', process.env.PORT || 'default');

// Verify environment variables
if (!process.env.JWT_SECRET) {
  console.error('FATAL ERROR: JWT_SECRET is not defined in the environment variables');
  process.exit(1);
}

console.log('JWT_SECRET loaded successfully');

// Connect to database
connectDB();

// Create default admin
createDefaultAdmin();

const app = express();

// CORS middleware
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Define routes
import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Define PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
