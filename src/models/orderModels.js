const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema


const userSchema = new mongoose.Schema({
  orderId: {
    type: String,
  } ,
  userId:{
    type:ObjectId
  }
} , {timestamps:true});

const User = mongoose.model('User', userSchema);

module.exports = User;