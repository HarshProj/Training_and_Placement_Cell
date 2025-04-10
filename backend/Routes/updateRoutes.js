const express = require('express');
const router = express.Router();
const {
  getUpdates,
  getUpdate,
  createUpdate,
  updateUpdate,
  deleteUpdate
} = require('../Controllers/updateController');

// Import middleware
const verifyAdmin = require('../Middleware/verifyAdmin'); // Using your verifyAdmin middleware

// Public routes
router.get('/', getUpdates);
router.get('/:id', getUpdate);

// Protected admin routes
router.post('/create', verifyAdmin, createUpdate);
router.put('/:id', verifyAdmin, updateUpdate);
router.delete('/:id', verifyAdmin, deleteUpdate);

module.exports = router;