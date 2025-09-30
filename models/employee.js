const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    specialization: { type: String, default:""},
    role: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, unique: true, sparse: true, default: null },
    
    password:{
        type:String,
        required:true,
    },
    birthday:{
        type:Date,
        required:true,

    },
    gender:{
        type:String,
        required:true,
    },

    bank:{
        type:Number,
        required:true
    },
    emergencyContact:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        default:null
    },
    employeeId:{
        type:String,
        required:true,
        
    },
    address:{
        type:String,
        required:true
    }
},{ timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;