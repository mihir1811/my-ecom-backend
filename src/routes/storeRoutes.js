const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Add more routes as needed
// router.post('/api/store', productController.createProduct);
router.get('/api/store', storeController.getStoreDetails);
// app.get('/api/products/:id', getProduct);

module.exports = router;