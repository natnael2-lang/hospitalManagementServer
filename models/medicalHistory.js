const LabResult= ('./labResult');
const Priscription= ('./prescription') ;
const mongoose = require('mongoose');
const medicalHistorySchema = new mongoose.Schema({
    patientId: { type:String, required: true },
    prescriptionId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Priscription', required: true },
    labResultId:{ type: mongoose.Schema.Types.ObjectId, ref: 'LabResult', required: true },
    
});

const MedicalHistory = mongoose.model('MedicalHistory', medicalHistorySchema);
module.exports = MedicalHistory;