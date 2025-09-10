const mongoose = require('mongoose');
const labResultSchema = new mongoose.Schema({
    labRequestId: { type: mongoose.Schema.Types.ObjectId, ref: 'LabRequest', required: true },
    labTechnicianId: { type:Number, required: true },
    resultDate: { type: Date, required: true },
    findings: { type: String, required: true },
    notes: { type: String, default: null },
});

const LabResult = mongoose.model('LabResult', labResultSchema);
module.exports = LabResult;