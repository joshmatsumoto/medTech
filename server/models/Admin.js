const { Schema, model } = require("mongoose");

const administratorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    required: [true, "An email is required."],
    validate: {
      validator: function (v) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
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
  ],

  hospital: [
    {
      type: Schema.Types.ObjectId,
      ref: "Hospital",
    },
  ],
});

const Administrator = model("Administrator", administratorSchema);

module.exports = Administrator;
