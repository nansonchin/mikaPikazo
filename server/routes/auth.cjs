const express = require('express');
const router = express.Router();
const {register,login,getProfile}= require('../controller/authController.cjs')
const authMiddleware = require('../middleware/authMiddleware.cjs')

router.post('/register',register);
router.post('/login',login);
router.get('/profile',authMiddleware,getProfile)

module.exports=router;