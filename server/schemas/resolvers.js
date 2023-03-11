const { AuthenticationError } = require('apollo-server-express');
const { Hospital, Patient, Doctor, Administrator } = require("../models");
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

    // patientByName: async (parent, {name}) => {
    //   const  params = {}
    //   if (name) {
    //     params.name = { $regex: name };
    //   }
    //   return await Patient.find(params).populate("doctor");
    // },

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

    // doctorByName: async (parent, {name}) => {
    //   const  params = {}
    //   if (name) {
    //     params.name = { $regex: name };
    //   }
    //   return await Doctor.find(params).populate("doctor");
    // },


    administrators: async () => {
      return await Administrator.find({})
    },

    administrator: async (parent, { _id }) => {
      return await Administrator.findById(_id)
    },
  },

  // Define the functions that will fulfill the mutations
  Mutation: {
    createPatient: async (parent, { _id, name, age, gender, adress, phone, email, password }, context) => {

      if (context.administrator) {
        const patient = await Patient.create({ _id, name, age, gender, adress, phone, email, password, }
        )
        await Administrator.findOneAndUpdate(
          { _id: context.administrator },
          { $addToSet: { patients: patient._id } },)
        return patient;
      }
      throw new AuthenticationError("You need to be logged in to create a patient");
    },

    updatePatient: async (parent, { _id, name, age, gender, adress, phone, email, password }) => {
      // Create and return the new Patient object
      return Patient.findByIdAndUpdate(
        _id,
        { $set: { name, age, gender, adress, phone, email, password } },
        { new: true }
      );
    },

    deletePatient: async (parent, { _id }) => {
      // Create and return the new Patient object
      return Patient.findByIdAndDelete(_id);
    },

    createDoctor: async (parent, { _id, name, email, password, department, officeHours, officeLocation }, context) => {
      // Create and return the new Doctor object
      if (context.administrator) {
        const doctor = await Doctor.create({
          _id,
          userType,
          name,
          email,
          password,
          department,
          officeHours,
          officeLocation,
        });

        await Administrator.findOneAndUpdate(
          { _id: context.administrator },
          { $addToSet: { doctors: doctor._id } }
        );
        return doctor;
      }
    },
    // Admin section
    // Create and return the new Admin object
    createAdmin: async (parent, { _id, name, email, password, phoneNumber }) => {
      return Administrator.create({ _id, userType, name, email, password, phoneNumber });
    },

    // Update Admin section
    updateAdmin: async (parent, { _id, name, email, password, phoneNumber }) => {
      return await Administrator.findByIdAndUpdate(
        _id,
        { $set: { name, email, password, phoneNumber } },
        { new: true }
      );
    },

    // Delete Admin Section
    deleteAdmin: async (parent, { _id }) => {
      return Administrator.findByIdAndDelete(_id);
    },

    updateDoctor: async (parent, { _id, name, email, password, department, officeHours, officeLocation }) => {
      return Doctor.findByIdAndUpdate(
        _id,
        { $set: { name, email, password, department, officeHours, officeLocation } },
        { new: true }
      );
    }
  },

  deleteDoctor: async (parent, { _id }) => {
    return await Doctor.findByIdAndDelete(_id);
  },
};


module.exports = resolvers;
