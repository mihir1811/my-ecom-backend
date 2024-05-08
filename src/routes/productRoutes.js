const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);
router.post('/', productController.createProduct);
// Add more routes as needed

module.exports = router;