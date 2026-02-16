const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// נתיב התחברות
router.post('/login', authController.login);

module.exports = router;