const connection = require('../config/connection');
const { Doctor, Patient, Hospital, Administrator } = require('../models');
const { faker } = require('@faker-js/faker');
const dayjs = require('dayjs');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to mongodb');
  } catch (error) {
    console.log(error);
  }
};

connectDB();

connection.on('error', (err) => console.log(err));

connection.once('open', async () => {
  console.log('You are successfully connected to the MedTech DB!');

  await Doctor.deleteMany({});
  await Patient.deleteMany({});
  await Hospital.deleteMany({});
  await Administrator.deleteMany({});

  const doctors = [];

  for (let i = 0; i < 3; i++) {
    doctors.push({
      userType: 'doctor',
      name: `Dr. ${faker.name.fullName()}`,
      department: 'General Medicine',
      doctorScore: faker.datatype.number({ min: 3, max: 5, precision: 0.1 }),
      officeHours: '9:00 AM - 5:00 PM',
      officeLocation: `Office Number ${faker.datatype.number({ min: 1001, max: 5050})}`,
      email: faker.internet.email(),
      password: faker.internet.password(8),
    });
  }



  const patients = [];

  for (let i = 0; i < 9; i++) {
    patients.push({
      userType: 'patient',
      name: faker.name.fullName(),
      age: dayjs(faker.date.birthdate({
        max: 65,
        min: 18,
        mode: 'age',
        refDate: String })).format('MM-DD-YYYY'),
      gender: faker.name.sex(),
      address: faker.address.streetAddress(true),
      phone: faker.phone.number('555-###-####'),
      email: faker.internet.email(),
      password: "abc12334",
    })
  }

  
  const hospitals = [];
  for (let i = 0; i < 1; i++) {
    hospitals.push({
      name: faker.company.name(),
      address: faker.address.streetAddress(true),
      phone: faker.phone.number('555-###-####'),
      password: faker.internet.password(8),
    })
  }



  const admins = [];
  for (let i = 0; i < 1; i++) {
    admins.push({
      userType: 'admin',
      name: faker.name.fullName({firstName: 'John', lastName: 'Doe',}),
      email: faker.internet.email('John', 'Doe'),
      phoneNumber: '555-555-555',
      password: faker.internet.password(8),
    })
  }
  const patientData = await Patient.insertMany(patients);
  const usersWithHashedPasswordsPromiseArray = patientData.map(
    async (patients) => {
      let hashedPassword = await bcrypt.hash(patients.password, saltRounds);
      patients.password = hashedPassword;
      return patients;
  })
  const usersWithHashedPasswords = await Promise.all(usersWithHashedPasswordsPromiseArray)

  const patientsHashed = await Patients.insertMany(usersWithHashedPasswords)


  await Doctor.collection.insertMany(doctors);


  await Hospital.collection.insertMany(hospitals);

  await Administrator.collection.insertMany(admins);

  console.table(doctors);
  console.table(patients);
  console.table(hospitals);
  console.table(admins);
  console.info(`seeded ${doctors.length} Doctors`);
  console.info(`seeded ${patients.length} Patients`);
  console.info(`seeded ${hospitals.length} Hospital`);
  console.info(`seeded ${admins.length} Admins`);
  process.exit(0);

});