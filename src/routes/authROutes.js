const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');

router.post('/register', authControllers.signup);
router.get("/users" , authControllers.getAllUSers);
router.post('/login', authControllers.signin);

module.exports = router;