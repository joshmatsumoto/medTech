const { Schema, model } = require("mongoose");

const patientSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    required: [true, "A Gender is required"],
  },

  address: {
    type: String,
    required: [true, "An address is required"],
  },

  phone: {
    type: String,
    required: [true, "A phone number is required"],
    validate: {
      validator: function (v) {
        return /^\d{3}-\d{3}-\d{4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number.`,
    },
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

  Doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
});

const Patient = model("Patient", patientSchema);

module.exports = Patient;
