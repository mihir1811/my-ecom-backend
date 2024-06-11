const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  images: { type: Array, required: true },
  status: { type: Boolean },
  skus: {
    type: Array,
    default: []
  },
  storeId: {
    type: ObjectId
  }
});

module.exports = mongoose.model('Product', productSchema);