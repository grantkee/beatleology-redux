const express = require('express');
const authController = require('../controllers/authentication');
const router = express.Router();

//user signup
router.post('/signup', authController.signup);

//user login
router.post('/login', authController.login);

module.exports = router;