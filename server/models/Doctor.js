const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const doctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
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
      minlength: 5,
    },
  

    department: {
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
    ],
    Hospital: {
      type: Schema.Types.ObjectId,
      ref: 'Hospital'
    }

  }
);

doctorSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const Doctor = model('Doctor', doctorSchema);

module.exports = Doctor;
