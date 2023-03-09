const { Schema, model } = require('mongoose');

const patientSchema = new Schema(
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

const Patient = model('Patient', patientSchema);

module.exports = Patient;
