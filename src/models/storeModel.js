const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema

const storeSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: true,
  },
  userId: {
    type: ObjectId,
    required: true,
  },
  status: {
    type: Number
  },
  statusText:{
    type: String
  },
  address:{
    type:Object
  }
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store