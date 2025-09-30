const mongoose = require('mongoose');
const Appointment = require("./appointment"); // Ensure correct path

const labRequestSchema = new mongoose.Schema({
    doctorId: { type: String, required: true },
    labTechnicianId: { type: String, required: true },
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    testRequests: [{ name: { type: String, required: true } }], // Updated to be an array of objects
    requestDate: { type: Date, default: Date.now, required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const LabRequest = mongoose.model('LabRequest', labRequestSchema);
module.exports = LabRequest;