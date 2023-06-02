const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  id: String,
  avatarPath: String,
  firstName: String,
  secondName: String,
  dateRegistration: Date,
  email: String,
  phone: String,
  isAvtovukyp: Boolean,
  isExpert: Boolean,
  password: String,
});

const UserModel = mongoose.model('user', UserSchema, 'user');

module.exports = UserModel;
