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
    studentCount: {
      type: Number,
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

const Hospital = model('Hospital', HospitalSchema);

module.exports = Hospital;
