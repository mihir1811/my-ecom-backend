const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');


// Add more routes as needed
router.get('/api/store',  storeController.getStoreDetails);
router.post('/api/store',  (req ,res)=>{
    res.send("add store")
});

module.exports = router;