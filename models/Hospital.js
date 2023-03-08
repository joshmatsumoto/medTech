const { Schema, model } = require('mongoose');

const HospitalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    location: {
      type: String,
      required: true
    },
    patientCount: {
      type: Number,
      required: true
    },
    Patients: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
      }
    ]
  }
);

const Hospital = model('Hospital', HospitalSchema);

module.exports = Hospital;
