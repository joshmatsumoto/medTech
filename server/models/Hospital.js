const { Schema, model } = require("mongoose");

const hospitalSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{3}-\d{3}-\d{4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number.`,
    },
  },

  doctors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
  ],

  patients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Patient",
    },
  ]
});

const Hospital = model("Hospital", hospitalSchema);

module.exports = Hospital;
