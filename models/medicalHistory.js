import LabResult from './labResult';
import Priscription from './prescription';
const mongoose = require('mongoose');
const medicalHistorySchema = new mongoose.Schema({
    doctorId:{type:Number,required:true},
    patientId: { type:Number, required: true },
    prescription:{ type: mongoose.Schema.Types.ObjectId, ref: 'Priscription', required: true },
    resultId:{ type: mongoose.Schema.Types.ObjectId, ref: 'LabResult', required: true },
    
});

const MedicalHistory = mongoose.model('MedicalHistory', medicalHistorySchema);
module.exports = MedicalHistory;