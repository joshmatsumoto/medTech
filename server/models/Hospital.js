const { Schema, model } = require('mongoose');

const hospitalSchema = new Schema(
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

const Hospital = model('Hospital', hospitalSchema);

module.exports = Hospital;
