const express = require('express');
const router = express.Router(); // Use express.Router() to create a router instance
const { patientRegister } = require("../controllers/patients/controllers.js");
// const authMiddleware = require('../middlewares/authMiddleware'); // Uncomment if needed

// Define the patient registration route
router.route('/register')
    .post(patientRegister);

module.exports = router; // Correctly export the router