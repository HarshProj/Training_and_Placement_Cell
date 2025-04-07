// models/Feedback.js
const mongoose=require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  organization: {
    type: String,
    required: [true, 'Please provide your organization name'],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
    trim: true,
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating'],
    min: 1,
    max: 5,
  },
  feedback: {
    type: String,
    required: [true, 'Please provide your feedback'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Prevent model compilation error in development due to hot reloading
const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);

module.exports=Feedback;