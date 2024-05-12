const mongoose = require('mongoose');
const validator = require('validator');

const assistantScheme = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'An Assistant must have name'],
  },
  email: {
    type: String,
    require: [true, 'An Assistant must have email address'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please Provide a valid email address'],
  },
  mobile: {
    type: Number,
    require: [true, 'An Assistant must have Mobile No'],
  },
  salary: {
    type: Number,
    require: [true, 'An Assistant must have salary'],
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
    require: [true, 'An assistint must have depatment'],
    enum: {
      values: ['accounts', 'technical', 'human-resource'],
      message: 'deperment should be from accounts,technical,human-resource',
    },
  },
  role: {
    type: String,
    require: [true, 'An Assistint must have role'],
  },
});

const Assistant = mongoose.model('Assistant', assistantScheme);
module.exports = Assistant;
