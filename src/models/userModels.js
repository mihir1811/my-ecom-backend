const mongoose = require('mongoose');

// User roles
const USER_ROLES = {
  USER: 'USER',
  SELLER: 'SELLER',
  SUPERADMIN: 'SUPERADMIN',
};

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  billingAddress: {
    type: Object,
  },
  shippingAddress: {
    type: Object,
  },
  userRole: {
    type: String,
    enum: Object.values(USER_ROLES),
    default: USER_ROLES.USER,
    required: true,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;