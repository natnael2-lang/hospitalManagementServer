const express = require('express');
const router = express.Router();
const {
    getAppointments,
    getDoctorDetails,
    getAppointmentByID,
    getMedicalHistory,
    postLabRequest,
    getLabResult,
    getLabRequest,
    authenticateToken,
    postPrescription
} = require("../controllers/doctor/controllers");


router.use(authenticateToken);

// Define routes
router.route("/appointments").get(getAppointments);
router.route("/appointments/:appointmentId").get(getAppointmentByID);
router.route("/").get(getDoctorDetails);
router.route("/medicalHistory/:patientId").get(getMedicalHistory);
router.route("/labRequest/:appointmentId").post(postLabRequest).get(getLabRequest);
router.route("/labResult/:labRequestId").get(getLabResult);
router.route("/prescription").post(postPrescription);

module.exports = router;