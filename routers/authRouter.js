const express = require('express');
const router = express.Router(); 
const { login,logout } = require("../controllers/auth/auth");
const{verifyToken}=require("../middlewares/authMiddleware")



router.route('/login')
    .post(login);
router.route('/logout')
      .get(logout)
router.route('/verifyToken')
      .get(verifyToken)

module.exports = router;