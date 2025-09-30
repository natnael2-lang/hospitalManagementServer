const Appointments = require("../../models/appointment");
const Doctor = require("../../models/employee");
const MedicalHistory = require("../../models/medicalHistory");
const LabRequest = require("../../models/labRequest");
const LabResult = require("../../models/labResult");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Prescription=require("../../models/prescription")

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ redirect: "/login" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Token is not valid" });
        }
        req.username = decoded.username; // Store username in the request
        next();
    });
};

// Controller functions
const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointments.find({ status: "Scheduled", doctorId: req.username });
        if (appointments.length === 0) {
            return res.status(404).json({ message: "No appointments found" });
        }
        res.status(200).json({ data: appointments });
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getDoctorDetails = async (req, res) => {
    try {
        const doctorDetails = await Doctor.findOne({ employeeId: req.username });
        if (!doctorDetails) {
            return res.status(404).json({ message: "No doctor found with this ID" });
        }
        res.status(200).json({ data: doctorDetails });
    } catch (error) {
        console.error("Error fetching doctor details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getAppointmentByID = async (req, res) => {
    const { appointmentId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
        return res.status(400).json({ message: "Invalid appointment ID format" });
    }
    try {
        const appointmentDetails = await Appointments.findById(appointmentId);
        if (!appointmentDetails) {
            return res.status(404).json({ message: "No appointment found" });
        }
        res.status(200).json({ data: appointmentDetails });
    } catch (error) {
        console.error("Error fetching appointment details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getMedicalHistory = async (req, res) => {
    const { patientId } = req.params;
    try {
        const medicalHistory = await MedicalHistory.find({ patientId });
        if (medicalHistory.length === 0) {
            return res.status(404).json({ message: "No medical history found" });
        }
        res.status(200).json({ data: medicalHistory });
    } catch (error) {
        console.error("Error fetching medical history:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const postLabRequest = async (req, res) => {
    const labRequest = req.body;
    console.log("lab request post ",labRequest)
    const { appointmentId } = req.params;
    if (!labRequest || Object.keys(labRequest).length === 0) {
        return res.status(400).json({ message: "No lab request data provided" });
    }
    try {
        const data = new LabRequest({ ...labRequest, doctorId: req.username });
        await data.save();
        res.status(201).json({ data });
    } catch (error) {
        console.error("Error creating lab request:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getLabResult = async (req, res) => {
  const { labRequestId } = req.params;
  console.log("labrecid ", labRequestId);
  
  try {
    const data = await LabResult.find({ labRequestId }); 
    console.log("getlabresult ",data)
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "Lab result not found" });
    }
    
    res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching lab result:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getLabRequest = async (req, res) => {
    const { appointmentId } = req.params;
    console.log("appoitmentid ",appointmentId)
    try {
        const data = await LabRequest.findOne({appointmentId});
        console.log("getLabRequest ",data)
        if (!data) {
            return res.status(404).json({ message: "Lab request not found" });
        }
        res.status(200).json(data );
    } catch (error) {
        console.error("Error fetching lab request:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const postPrescription = async (req, res) => {
    const prescription = req.body;
    console.log("doctor prescription post ",prescription)
    
    if (!prescription || Object.keys(prescription).length === 0) {
        return res.status(400).json({ message: "No lab request data provided" });
    }
    try {
        const data = new Prescription({ ...prescription, doctorId: req.username });
        await data.save();
        console.log("prescription created post ",data)
        return res.status(201).json({ data });
    } catch (error) {
        console.error("Error creating lab request:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    authenticateToken,
    getAppointments,
    getDoctorDetails,
    getAppointmentByID,
    getMedicalHistory,
    postLabRequest,
    getLabResult,
    getLabRequest,
    postPrescription
};