const mongoose = require('mongoose');
const Appointment = require('./appointment');
const pharmacySchema = new mongoose.Schema({
    pharmacistId:{ type: String, required: true },
    medication: { type: String, required: true },
    dosage: { type: String, required: true },
    quantity: { type: String, required: true },
    doctorId: { type: String, required: true },
    appointmentId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true
    },
    
    date: { type: Date,default:Date.now, required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' },
});

const Priscription = mongoose.model('Priscription', pharmacySchema);
module.exports = Priscription;