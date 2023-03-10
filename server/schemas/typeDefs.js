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

  type Admin {
    _id: ID
    name: String
    email: String
    username: String
    password: String
  }

  type Query {
    hospitals: [Hospital]
    patients: [Patient]
    doctors: [Doctor]
    patient(id: ID!): Patient
    admin(username: String!, password: String!): Admin
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Set the required fields for new schools
    addHospital(name: String!, location: String!, patientCount: Int!): Hospital
    addAdmin(username:String!, password:String!): Admin
  }
`;

module.exports = typeDefs;
