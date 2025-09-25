const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
    patientId:{type:String,required:true},
    patientId: { type:String, required: true },
    doctorId: { type:String, required: true },
    receptionId: { type:String, required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;