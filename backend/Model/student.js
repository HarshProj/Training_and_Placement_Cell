const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9._%+-]+@knit\.ac\.in$/, 'Please enter a valid @knit.ac.in email address'],
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  mobile: {
    type: Number,
  },
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
