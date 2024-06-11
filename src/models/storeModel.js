const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const storeSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: true,
  },
  userId: {
    type: ObjectId,
    required: true,
  },
  address: {
    type: Object
  },
  isVerified:{
    type: Boolean,
    default: false
  },
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store