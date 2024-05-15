const mongoose = require('mongoose');
const validator = require('validator');

const assistantScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An assistant must have name'],
  },
  email: {
    type: String,
    required: [true, 'An assistant must have email address'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email address'],
  },
  mobile: {
    type: Number,
    required: [true, 'An assistant must have Mobile No'],
  },
  salary: {
    type: Number,
    required: [true, 'An assistant must have salary'],
  },
  city: {
    type: String,
  },
  country: {
    type: String,
    default: 'India',
  },
  department: {
    type: String,
    required: [true, 'An assistant must have depatment'],
    enum: {
      values: ['finance', 'marketing', 'operations', 'customer-service'],
      message:
        'Department should be one of: finance, marketing, operations, customer-service',
    },
  },
  role: {
    type: String,
    required: [true, 'An assistant must have role'],
    enum: {
      values: ['assistant', 'supervisor', 'coordinator'],
      message: 'Role should be one of: assistant, supervisor, coordinator',
    },
    default: 'assistant',
  },
});

const Assistant = mongoose.model('Assistant', assistantScheme);
module.exports = Assistant;
