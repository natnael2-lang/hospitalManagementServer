const mongoose = require('mongoose');
const LabRequest = require("./labRequest"); 

const labResultSchema = new mongoose.Schema({
    labRequestId: { type: mongoose.Schema.Types.ObjectId, ref: 'LabRequest', required: true },
    labTechnicianId: { type: String, required: true },
    doctorId: { type: String, required: true },
    resultDate: { type: Date,  default: Date.now,required: true },
    findings: { type:Object, required: true },
    notes: { type: String, default: null },
}, { timestamps: true }); 

const LabResult = mongoose.model('LabResult', labResultSchema);
module.exports = LabResult;