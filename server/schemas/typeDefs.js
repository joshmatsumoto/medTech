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


  type Mutation {
    login(email: String!, password: String!): Auth
    createDoctor(name: String!, officeHours: String!, officeLocation: String!, doctorScore: Float): Doctor
    updateDoctor(id: ID!, name: String, officeHours: String, officeLocation: String doctorScore: Float): Doctor
    deleteDoctor(id: ID!): Doctor
    getallDoctors: [Doctor]
    getallPatients: [Patient]
    createPatient(name: String!, department: String!, creditHours: Int!): Patient
    updatePatient(id: ID!, name: String, department: String, creditHours: Int): Patient
    deletePatient(id: ID!): Patient
    createAdmin(name: String!, email: String!, username: String!, password: String!): Admin
    updateAdmin(id: ID!, name: String, email: String, username: String, password: String): Admin
    deleteAdmin(id: ID!): Admin
    getallAdmin: [Admin]


  }
`;

module.exports = typeDefs;
