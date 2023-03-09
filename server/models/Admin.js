const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

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
  
  password: {
    type: String,
    required: true,
    minlength: 8,
    validator: function (v) {
      return /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
    },
    message: (props) => `${props.value} is not a valid password.`,
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

  hospitals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Hospital",
    },
  ],
});

administratorSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

administratorSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Administrator = model("Administrator", administratorSchema);

module.exports = Administrator;
