const express = require('express');
const router = express.Router(); // Use express.Router() to create a router instance
const { login,loginOnLoad,logout } = require("../controllers/auth/auth");
// const authMiddleware = require('../middlewares/authMiddleware'); // Uncomment if needed

// Define the patient registration route
router.route('/login')
    .post(login);
router.route('/loginOnLoad')
      .get(loginOnLoad)
router.route('/logout')
      .get(logout)

module.exports = router; // Correctly export the router