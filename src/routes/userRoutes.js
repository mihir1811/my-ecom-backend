const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const authMiddleware = require("../middleware/authMiddleware")

// auth routes
router.post('/register', userControllers.signup);
router.post('/login', userControllers.signIn);
router.post('/logout',authMiddleware , userControllers.logOut);


// sellers api

module.exports = router;