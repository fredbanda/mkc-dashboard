// models/User.js

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  username: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  image: {type: String},

});

export default mongoose.models.User || mongoose.model('User', UserSchema);
