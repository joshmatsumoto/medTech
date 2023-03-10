const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Hospital {
    _id: ID
    name: String
    location: String
    phoneNumber: String
    doctors:[Doctor]
    patients: [Patient]
  }

  type Patient {
    _id: ID
    name: String
    age: Int
    gender: String
    address: String
    phone: String
    email: String
    password: String
    doctor: Doctor
  }

  type Doctor {
    _id: ID
    name: String
    email: String
    password: String
    department: String
    officeHours: String
    officeLocation: String
    doctorScore: Float
    patients: [Patient]
    hospital: Hospital
  }

  type Admin {
  _id: ID
  name: String
  email: String
  password: String
  phone: String
  doctors: [Doctor]
  patients: [Patient]
  hospitals: [Hospital]
  }

  type Query {
    hospitals: [Hospital]
    patients: [Patient]
    doctors: [Doctor]
    patient(id: ID!): Patient
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new schools
    addHospital(name: String!, location: String!, patientCount: Int!): Hospital
  }
`;

module.exports = typeDefs;
