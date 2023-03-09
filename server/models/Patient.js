const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

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

  password: {
    type: String,
    required: true,
    minlength: 8,
    validator: function (v) {
      return /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
    },
    message: (props) => `${props.value} is not a valid password.`,
  },

  

  Doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
});

patientSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

patientSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const Patient = model("Patient", patientSchema);

module.exports = Patient;
