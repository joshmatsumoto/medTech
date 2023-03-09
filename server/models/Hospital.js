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
    phoneNumber: {
      type: String,
      required: true
    },
    Doctors: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
      }
    ]
  }
);

const Hospital = model('Hospital', hospitalSchema);

module.exports = Hospital;
