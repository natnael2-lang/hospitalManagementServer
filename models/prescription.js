const mongoose = require('mongoose');
const pharmacySchema = new mongoose.Schema({
    pharmacyId:{ type:Number, required: true },
    medication: { type: String, required: true },
    dosage: { type: String, required: true },
    quantity: { type: Number, required: true },
    doctorId: { type:Number, required: true },
    patientId: { type: Number, required: true },
    datePrescribed: { type: Date, required: true },
    status: { type: String, enum: ['Active', 'Completed', 'Cancelled'], default: 'Active' },
});

const Priscription = mongoose.model('Priscription', pharmacySchema);
module.exports = Priscription;