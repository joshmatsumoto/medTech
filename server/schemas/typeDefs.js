const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Hospital {
    _id: ID
    name: String
    location: String
    patientCount: Int
    patients: [Patient]
  }

  type Patient {
    _id: ID
    name: String
    department: String
    creditHours: Int
    doctor: Doctor
  }

  type Doctor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    doctorScore: Float
    patients: [Patient]
  }

  type Query {
    hospitals: [Hospital]
    patients: [Patient]
    doctors: [Doctor]
    patient(id: ID!): Patient
    doctorsByScore(doctorScore: Float): [Doctor]
    doctor(id:ID!): Doctor
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new schools
    addHospital(name: String!, location: String!, patientCount: Int!): Hospital
  }
`;

module.exports = typeDefs;
