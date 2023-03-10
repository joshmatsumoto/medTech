const { AuthenticationError } = require('apollo-server-express');
const { Hospital, Patient, Doctor, Administrator } = require("../models");

const resolvers = {
  Query: {
    hospitals: async () => {
      return await Hospital.find({}).populate("patients").populate({
        path: "patients",
        populate: "doctor",
      });
    },
    patients: async () => {
      return await Patient.find({}).populate("doctor");
    },
    patient: async (parent, args) => {
      return await Patient.findById(args.id).populate("doctor");
    },

    doctors: async () => {
      return await Doctor.find({}).populate("patients")
        // .populate({
        //   path: "doctors",
        //   populate: "patient",
        // })
        ;
    },
    administrator: async () => {
      return {
        hospitals: await Hospital.find({}).populate("patients").populate({
          path: "patients",
          populate: "doctor",
        }),
        doctors: await Doctor.find({}).populate("patients"),
        patients: await Patient.find({}).populate("doctor"),
      };
    },
  },
  // Define the functions that will fulfill the mutations
  Mutation: {
    createPatient: async (parent, { _id, userType, name, age, gender, adress, phone, email, password }, context) => {
      // Create and return the new Patient object
      if (context.doctor) {
        const patient = await Patient.create({ _id, userType, name, age, gender, adress, phone, email, password, doctor: context.doctor }
        )
        await Doctor.findOneAndUpdate(
          { _id: context.doctor },
          { $addToSet: { patients: patient._id } },)
        return patient;
      }
      if (context.administrator) {
        const patient = await Patient.create({ _id, userType, name, age, gender, adress, phone, email, password, }
        )
        await Administrator.findOneAndUpdate(
          { _id: context.administrator },
          { $addToSet: { patients: patient._id } },)
        return patient;
      }
      throw new AuthenticationError("You need to be logged in to create a patient");
    },
    updatePatient: async (parent, { id, name, age, gender, adress, phone, email, password }) => {
      // Create and return the new Patient object
      return Patient.findByIdAndUpdate(
        { _id: id },
        { $set: { id, name, age, gender, adress, phone, email, password } },
        { new: true }
      );
    },
    deletePatient: async (parent, { _id }) => {
      // Create and return the new Patient object
      return Patient.findByIdAndDelete(_id);
    },

    createDoctor: async (parent, { _id, userType, name, email, password, department, officeHours, officeLocation }, context) => {
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
      return Administrator.findByIdAndUpdate(
        { _id: id },
        { $set: { _id, name, email, password, phoneNumber } },
        { new: true }
      );
    },
    // Delete Admin Section
    deleteAdmin: async (parent, { _id }) => {
      return Administrator.findByIdAndDelete(_id);
    },

    updateDoctor: async (parent, { doctorId }, context) => {
      if (context.user) {
        return Doctor.findByIdAndUpdate(
          { _id: doctorId },
          { $addToSet: { patients: context.user._id } },
          { new: true }
        );
      }
    },
    deleteDoctor: async (parent, { _id }) => {
      return await Doctor.findByIdAndDelete(_id);
    },
  },
};

module.exports = resolvers;
