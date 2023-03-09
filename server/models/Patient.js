const { Schema, model } = require('mongoose');

const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    
    age: {
      type: Number,
      required: true,

    },

    gender: {
      type: String,
      required: true,

    },

    address: {
      type: String,
      required: true,

    },

    phone: {
      type: String,
      required: true,

    },

    email: {
      type: String,
      required: true,
      
    },

    Doctor: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor'
    }
  }
);

const Patient = model('Patient', patientSchema);

module.exports = Patient;
