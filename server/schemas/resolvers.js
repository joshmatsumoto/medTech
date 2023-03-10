const { AuthenticationError } = require('apollo-server-express');
const { Hospital, Patient, Doctor, Administrator, Appointment } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    patients: async () => {
      return await Patient.find({}).populate('doctor');
    },
    patient: async (parent, { _id }) => {
      return await Patient.findById(_id).populate("doctor");
    },

    thisPatient: async (parent, { _id }, context) => {
      if (context.patient) {
        const patient = await Patient.findById(_id).populate("doctor");
        return patient;
      }
      throw new AuthenticationError("You need to be logged in to view patient profile");
    },

    doctors: async () => {
      return await Doctor.find({}).populate("patients");
    },
    doctor: async (parent, { _id }) => {
      return await Doctor.findById(_id).populate("patients");
    },

    thisDoctor: async (parent, { _id }, context) => {
      if (context.doctor) {
        const doctor = await Doctor.findById(_id).populate("doctor");
        return doctor;
      }
      throw new AuthenticationError("You need to be logged in to view doctor profile");
    },

    thisAdministrator: async (parent, { _id }, context) => {
      if (context.administrator) {
        const administrator = await Administrator.findById(_id)
      }
    },
    administrators: async () => {
      return await Administrator.find({})
    },

    administrator: async (parent, { _id }) => {
      return await Administrator.findById(_id)
    },
  },

  // Define the functions that will fulfill the mutations
  Mutation: {
    login: async (parent, { userType, email, password }) => {

      if (userType = "patient") {
        const patient = await Patient.findOne({ email });
        const correctPw = await patient.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect password');
        }

        const token = signToken(patient);

        return { token, patient };
      }
      else if (userType = "doctor") {
        const doctor = await Doctor.findOne({ email });
        const correctPw = await doctor.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect password');
        }

        const token = signToken(doctor);

        return { token, doctor };
      }
      else if (userType = "administrator") {
        const administrator = await Administrator.findOne({ email });
        const correctPw = await administrator.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect passwword');
        }

        const token = signToken(administrator);

        return { token, administrator };
      }
      else {
        throw new AuthenticationError('Incorrect username');
      }
    },

    assignDoctor: async (parent, { _id }, context) => {
      if (context.patient) {
        const doctor = await Doctor.findById(_id);
        const patient = await Patient.findByIdAndUpdate(context.patient._id, { $push: { doctor: doctor } }, { new: true });
        return patient;
      }
      throw new AuthenticationError("You need to be logged in to assign a doctor to a patient");
    },

    assignPatient: async (parent, { _id }, context) => {
      if (context.doctor) {
        const patient = await Patient.findById(_id);
        const doctor = await Doctor.findByIdAndUpdate(context.doctor._id, { $push: { patients: patient } }, {new: true});
        return doctor;;
      };
      throw new AuthenticationError('could not assign patient');
    },

    createPatient: async (parent, args) => {
      const patient = await Patient.create(args);
      const token = signToken(patient);
      return { token, patient };
    },

    createDoctor: async (parent, args) => {
      const doctor = await Doctor.create(args);
      const token = signToken(doctor);
      return { token, doctor };
    },

    createAdmin: async (parent, args) => {
      const administrator = await Administrator.create(args);
      const token = signToken(administrator);
      return { token, administrator };
    },

    createAppointment: async (parent, args, context) => {
      if (context.patient) {
        const appointment = await Appointment.create(args);
        return await Patient.findByIdAndUpdate(context.patient._id, { $push: { appointment: appointment._id } });
      };
    },

    // Update Patient section
    updatePatient: async (parent, { _id, name, age, gender, adress, phone, email, password }) => {
      return Patient.findByIdAndUpdate(
        _id,
        { $set: { name, age, gender, adress, phone, email, password } },
        { new: true }
      );
    },

    // Update Doctor section
    updateDoctor: async (parent, { _id, name, email, password, department, officeHours, officeLocation }) => {
      return Doctor.findByIdAndUpdate(
        _id,
        { $set: { name, email, password, department, officeHours, officeLocation } },
        { new: true }
      );
    },

    // Update Admin section
    updateAdmin: async (parent, { _id, name, email, password, phoneNumber }) => {
      return await Administrator.findByIdAndUpdate(
        _id,
        { $set: { name, email, password, phoneNumber } },
        { new: true }
      );
    },

    // Delete Patient section
    deletePatient: async (parent, { _id }) => {
      return Patient.findByIdAndDelete(_id);
    },

    // Delete Doctor section
    deleteDoctor: async (parent, { _id }) => {
      return await Doctor.findByIdAndDelete(_id);
    },

    // Delete Admin Section
    deleteAdmin: async (parent, { _id }) => {
      return Administrator.findByIdAndDelete(_id);
    },

  }
};


module.exports = resolvers;
