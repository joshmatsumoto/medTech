const { Schema, model } = require('mongoose');

const PatientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    building: {
      type: String,
      required: true
    },
    creditHours: {
      type: Number,
      required: true
    },
    Doctor: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor'
    }
  }
);

const Patient = model('Patient', PatientSchema);

module.exports = Patient;
