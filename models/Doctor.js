const { Schema, model } = require('mongoose');

const DoctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    doctorScore: {
      type: Number
    },
    officeHours: {
      type: String,
      required: true
    },
    officeLocation: {
      type: String,
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

const Doctor = model('Doctor', DoctorSchema);

module.exports = Doctor;
