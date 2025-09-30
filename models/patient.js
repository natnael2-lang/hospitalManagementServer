const mongoose =require('mongoose');

const patientSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDay: { type: Date, required: true },
    gender: { type: String, required: true },
    maritalStatus: { type: String, required: true },
    occupation: { type: String, required: true },
    region: { type: String, required: true },
    zone: { type: String, required: true },
    woreda: { type: String, required: true },
    kebele: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, unique: true, sparse: true, default: null },
    cardNumber:{type:String,required:true},
    emergencyContact: {
        name: { type: String, required: true },
        relationship: { type: String, required: true },
        phone: { type: String, required: true },
    },
    insuranceInfo: {
        tenaMedihn: { type: String, required: true },
        tenaMedihnNumber: { type: String, required: true },
    }
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);
module.exports=Patient;