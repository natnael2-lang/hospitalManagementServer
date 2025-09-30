const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  manufacturer: {
    type: String,
    required: true,
    trim: true
  },
  unit: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  expiryDate: {
    type: Date,
    required: true
  },
  pharmacistId:{
    type:String,
    required:true
  },
  accessiblity:{
    type:String,
    enum:["local","referal"],
    default:"local"
  }
}, {
  timestamps: true 
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;