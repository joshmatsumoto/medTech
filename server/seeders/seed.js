const connection = require('../config/connection');
const { Doctor, Patient, Hospital } = require('../models');
const { faker } = require('@faker-js/faker');
const dayjs = require('dayjs');

connection.on('error', (err) => console.log(err));

connection.once('open', async () => {
  console.log('You are successfully connected to the MedTech DB!');

  await Doctor.deleteMany({});

  const doctors = [];

  for (let i = 0; i < 3; i++) {
    doctors.push({
      name: `Dr. ${faker.name.fullName()}`,
      department: 'General Medicine',
      doctorScore: faker.datatype.number({ min: 3, max: 5, precision: 0.1 }),
      officeHours: '9:00 AM - 5:00 PM',
      officeLocation: `Office Number ${faker.datatype.number({ min: 1001, max: 5050})}`,
  
    });
  }

  await Patient.deleteMany({});

  const patients = [];

  for (let i = 0; i < 9; i++) {
    patients.push({
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
    })
  }

  await Hospital.deleteMany({});
  const hospitals = [];
  for (let i = 0; i < 1; i++) {
    hospitals.push({
      name: faker.company.name(),
      address: faker.address.streetAddress(true),
      phone: faker.phone.number('555-###-####'),
    });
  }

  await Doctor.collection.insertMany(doctors);

  await Patient.collection.insertMany(patients);

  await Hospital.collection.insertMany(hospitals);

  console.table(doctors);
  console.table(patients);
  console.table(hospitals);
  console.info(`seeded ${doctors.length} Doctors`);
  console.info(`seeded ${patients.length} Patients`);
  console.info(`seeded ${hospitals.length} Hospital`);
  process.exit(0);

});