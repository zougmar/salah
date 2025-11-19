import jwt from 'jsonwebtoken';

export default function(req, res, next) {
  // Get token from header
  const authHeader = req.header('Authorization');

  // Check if header exists and starts with Bearer
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Extract token
  const token = authHeader.substring(7);

  // Check if token is empty
  if (!token) {
    return res.status(401).json({ msg: 'Token is empty, authorization denied' });
  }

  // Verify token
  try {
    // Log JWT_SECRET for debugging
    console.log('JWT_SECRET in middleware:', process.env.JWT_SECRET ? 'exists' : 'missing');
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('Auth middleware error:', err.message);

    // Differentiate between expired token and invalid token
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ msg: 'Token expired, please log in again' });
    } else if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ msg: 'Invalid token, authorization denied' });
    } else {
      return res.status(500).json({ msg: 'Server error during authentication' });
    }
  }
};
