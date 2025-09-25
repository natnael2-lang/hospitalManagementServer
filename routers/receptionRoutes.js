const express = require('express');
const router = express.Router();
const {receptionOnLoad,patientAppointment} = require("../controllers/receptions/controllers.js");
const middlewares=require("../middlewares/authMiddleware")

router.route('/')
    .get(receptionOnLoad);
router.route("/appointments")
      .post(patientAppointment)

module.exports = router; 