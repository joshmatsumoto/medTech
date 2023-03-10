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
    administrator: async () => {
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
    createPatient: async (parent, { _id,userType, name, age, gender, adress, phone, email, password}) => {
      // Create and return the new Patient object
      return await Patient.create({ _id, name, age, gender, adress, phone, email, password});
    },
    updatePatient: async (parent, { id, name, age, gender, adress, phone, email, password }) => {
      // Create and return the new Patient object
      return await Patient.findByIdAndUpdate(
        { _id: id },
        { $set: { id, name, age, gender, adress, phone, email, password  } },
        { new: true }
      );
    },
    deletePatient: async (parent, { _id }) => {
      // Create and return the new Patient object
      return await Patient.findByIdAndDelete(_id); 

    },

    createDoctor: async (parent, { _id, userType, name, email, password, department, officeHours, officeLocation }) => {
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
    deleteDoctor: async (parent, { _id }) => { 
  
        return await Doctor.findByIdAndDelete(_id)
      
    }
  }
};

module.exports = resolvers;
