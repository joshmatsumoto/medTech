const { Hospital, Patient, Doctor, Administrator } = require('../models');

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
    admin: async () => {
      return {
        hospitals: await Hospital.find({}).populate('patients').populate({
          path: 'patients',
          populate: 'doctor',
        }),
        doctors: await Doctor.find({}).populate('patients'),
        patients: await Patient.find({}).populate('doctor')
      }
    }

  },
  // Define the functions that will fulfill the mutations
  Mutation: {
    createHospital: async (parent, { name, location, patientCount }) => {
      // Create and return the new Hospital object
      return await Hospital.create({ name, location, patientCount });
    },
    createPatient: async (parent, { name, age, gender }) => {
      // Create and return the new Patient object
      return await Patient.create({ name, age, gender });
    },
    createDoctor: async (parent, { _id, name, email, password, department, officeHours, officeLocation }) => {
      // Create and return the new Doctor object
      return await Doctor.create({  _id, name, email, password, department, officeHours, officeLocation  });
    },
    createAdmin: async (parent, { name, specialty }) => {
      // Create and return the new Admin object
      return await Administrator.create({ name, specialty });
    },
    updateDoctor: async (parent,{ doctorId }, context) => {
      if (context.user) {
        return await Doctor.findByIdAndUpdate(
          { _id: doctorId },
          { $addToSet: { patients: context.user._id } },
          { new: true }
        );
    }
    },
    deleteDoctor: async (parent, { doctorId }, context) => { 
      if (context.user) {
        return await Doctor.findByIdAndUpdate(
          { _id: doctorId },
          { $pull: { patients: context.user._id } },
          { new: true }
        );  
    }
    },
    }, 
};

module.exports = resolvers;
