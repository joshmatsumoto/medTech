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
  const Patientes = await Patient.insertMany(PatientData);
  const Doctors = await Doctor.insertMany(DoctorData);

  for (newPatient of Patientes) {
    // randomly add each Patient to a Hospital
    const tempHospital = Hospitals[Math.floor(Math.random() * Hospitals.length)];
    tempHospital.Patientes.push(newPatient._id);
    await tempHospital.save();

    // randomly add a Doctor to each Patient
    const tempDoctor = Doctors[Math.floor(Math.random() * Doctors.length)];
    newPatient.Doctor = tempDoctor._id;
    await newPatient.save();

    // reference Patient on Doctor model, too
    tempDoctor.Patientes.push(newPatient._id);
    await tempDoctor.save();
  }

  console.log('all done!');
  process.exit(0);
});
