const db = require('../config/connection');
const { Hospital, Patient, Doctor } = require('../models');

const HospitalData = require('./HospitalData.json');
const PatientData = require('./PatientData.json');
const DoctorData = require('./DoctorData.json');

db.once('open', async () => {
  // clean database
  await Hospital.deleteMany({});
  await Patient.deleteMany({});
  await Doctor.deleteMany({});

  // bulk create each model
  const Hospitals = await Hospital.insertMany(HospitalData);
  const Patients = await Patient.insertMany(PatientData);
  const Doctors = await Doctor.insertMany(DoctorData);
  
  console.log('all done!');
  process.exit(0);
});
