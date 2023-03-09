const { Hospital, Patient, Doctor } = require('../models');

const resolvers = {
  Query: {
    hospitals: async () => {
      return await Hospital.find({}).populate('patients').populate({
        path: 'patients',
        populate: 'doctor',
      });
    },
    patients: async () => {
      return await Patient.find({}).populate('doctor');
    },
    patient: async (parent, args) => {
      return await Patient.findById(args.id).populate('doctor');
    },
    doctors: async () => {
      return await Doctor.find({}).populate('patients');
    },
    doctors: async (parent, args) => {
      return await Doctor.find(args.doctorScore);
    },
    doctor: async (parent, args) => {
      return await Doctor.findById(args.id);
    },
  },
    // Define the functions that will fulfill the mutations
    Mutation: {
      addHospital: async (parent, { name, location, patientCount }) => {
        // Create and return the new Hospital object
        return await Hospital.create({ name, location, patientCount });
      },
    },
  };

  module.exports = resolvers;
