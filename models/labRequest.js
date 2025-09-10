const mongoose = require('mongoose');
const labRequestSchema = new mongoose.Schema({
    patientId: { type:Number, required: true },
    doctorId: { type: Number, required: true },
    testType: { type: String, required: true },
    requestDate: { type: Date, required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' },
});

const LabRequest = mongoose.model('LabRequest', labRequestSchema);
module.exports = LabRequest;