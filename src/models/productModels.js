const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    images: { type: Array, required: true },
    status: { type: Boolean }
});

module.exports = mongoose.model('product', productSchema);