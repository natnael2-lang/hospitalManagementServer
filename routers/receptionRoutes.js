const express = require('express');
const router = express.Router();
const {receptionOnLoad,patientAppointment,patientRegistration} = require("../controllers/receptions/controllers.js");
const middlewares=require("../middlewares/authMiddleware")

router.route('/')
    .get(receptionOnLoad);
router.route("/appointments")
      .post(patientAppointment)
router.route("/registration")
      .post(patientRegistration)

module.exports = router; 