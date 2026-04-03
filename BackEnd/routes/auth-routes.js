const express = require('express');
const { signUpUser, loginUser } = require('../controllers/auth-controllers')
const router = express.Router();


//all routes are related to authentication
router.post("/signup", signUpUser);
router.post("/login", loginUser);

module.exports = router;
