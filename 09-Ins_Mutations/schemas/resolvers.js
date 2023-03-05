const { Hospital, Patient, Doctor } = require('../models');

const resolvers = {
  Query: {
    Hospitals: async () => {
      return await Hospital.find({}).populate('Patients').populate({
        path: 'Patients',
        populate: 'Doctor',
      });
    },
    Patients: async () => {
      return await Patient.find({}).populate('Doctor');
    },
    Patient: async (parent, args) => {
      return await Patient.findById(args.id).populate('Doctor');
    },
    Doctors: async () => {
      return await Doctor.find({}).populate('Patients');
    },
  },
  // Define the functions that will fulfill the mutations
  Mutation: {
    addHospital: async (parent, { name, location, studentCount }) => {
      // Create and return the new Hospital object
      return await Hospital.create({ name, location, studentCount });
    },
  },
};

module.exports = resolvers;
