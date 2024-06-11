const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Add more routes as needed
router.post('/api/products', productController.createProduct);
router.get('/api/products', productController.getAllProducts);
// app.get('/api/products/:id', getProduct);

module.exports = router;