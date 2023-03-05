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
    classes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Class'
      }
    ]
  }
);

const Doctor = model('Doctor', DoctorSchema);

module.exports = Professor;
