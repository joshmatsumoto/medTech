const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const doctorSchema = new Schema(
  {
    userType: {
      type: String,
      default: 'doctor'
    },
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
      minlength: 8,
      validator: function (v) {
        return /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid password.`,
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
    patients: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
      }
    ],
    hospital: {
      type: Schema.Types.ObjectId,
      ref: 'Hospital'
    }
    
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }

);
// doctorSchema.virtual('patients').get(function (){
//   return this.patients;
// });
doctorSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

doctorSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const Doctor = model('Doctor', doctorSchema);

module.exports = Doctor;
