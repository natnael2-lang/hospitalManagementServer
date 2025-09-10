const express = require('express');
const router = express.Router();
const { employeeRegitration } = require("../controllers/employees/controllers.js");


router.route('/hire')
    .post(employeeRegitration);

module.exports = router; 