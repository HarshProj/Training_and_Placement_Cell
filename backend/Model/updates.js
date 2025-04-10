const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  eligibleBranches: {
    type: [String],
    enum: [
      'Computer Science And Engineering',
      'Electrical Engineering', 
      'Mechanical Engineering',
      'Electronics Engineering',
      'Information Technology',
      'Civil Engineering',
      'MCA'
    ],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Update', updateSchema);