const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Hospital {
    _id: ID
    name: String
    location: String
    PatientCount: Int
    Patients: [Patient]
  }

  type Patient {
    _id: ID
    name: String
    department: String
    creditHours: Int
    Doctor: Doctor
  }

  type Doctor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    doctorScore: Float
    Patients: [Patient]
  }

  type Query {
    hospitals: [Hospital]
    Patients: [Patient]
    doctors: [Doctor]
    {Patient}(id: ID!): Patient
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new schools
    addHospital(name: String!, location: String!, PatientCount: Int!): Hospital
  }
`;

module.exports = typeDefs;
