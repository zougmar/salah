import express from 'express';
import { register, login, logout, getProfile } from '../controllers/authController.js';
import auth from '../middleware/auth.js';
const router = express.Router();

// Register a new user
router.post('/register', register);

// Login user
router.post('/login', login);

// Logout user
router.get('/logout', logout);

// Get current user
router.get('/user', auth, getProfile);

export default router;
