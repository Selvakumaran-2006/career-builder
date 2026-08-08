const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecret_career_builder_jwt_token_2026_key');
      req.user = await User.findById(decoded.id).select('-password');
      if (!req.user) {
        // Fallback for mock in-memory user if DB not populated
        req.user = { _id: decoded.id, name: 'Student Developer', email: decoded.email || 'student@example.com', role: decoded.role || 'student' };
      }
      return next();
    } catch (error) {
      return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
    }
  }

  // Fallback demo mode if no token provided for smooth preview
  req.user = { _id: '65c8f1234567890abcdef123', name: 'Demo Student', email: 'demo@careerbuilder.com', role: 'student' };
  next();
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ success: false, message: 'Not authorized as an admin' });
  }
};

module.exports = { protect, admin };
