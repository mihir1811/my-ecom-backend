const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const authMiddleware = require("../middleware/authMiddleware")


router.post('/register', userControllers.signup);
router.post('/login', userControllers.signIn);
router.post('/logout',authMiddleware , userControllers.logOut);


module.exports = router;