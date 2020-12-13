const router = require('express').Router();
const db = require('../../models');
const authController = require('../../controllers/authController.js');
const bcrypt = require('bcryptjs');

router.post('/signin', authController.signin);

module.exports = router;