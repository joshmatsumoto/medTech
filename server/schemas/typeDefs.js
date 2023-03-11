const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Hospital {
    _id: ID!
    name: String
    location: String
    phoneNumber: String
    doctors:[Doctor]
    patients: [Patient]
  }
  type Patient {
    _id: ID!
    userType: String
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
    _id: ID!
    userType: String
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
  type Administrator {
  _id: ID!
  userType: String
  name: String
  email: String
  password: String
  phone: String
  }

  type Query {
    hospitals: [Hospital]
    hospital(_id: ID!): Hospital
    patients: [Patient]
    patient(_id: ID!): Patient
    thisPatient: Patient
    doctors: [Doctor]
    doctor(_id: ID!): Doctor
    thisDoctor: Doctor
    administrators: [Administrator]
    administrator(_id:ID!): Administrator

  }
  type Auth {
    token: ID
    Administrator:Administrator
  }
  type Auth {
    token: ID
    Patient:Patient
  }
  type Auth {
    token: ID
    Doctor:Doctor
  }

  
  type Mutation {
    login(email: String!, password: String!): Auth

    createDoctor( _id: ID!, name: String!, email:String!, password:String!, department: String!, officeHours: String!, officeLocation: String!): Auth

    updateDoctor(_id: ID!, name: String, email:String, password:String, department: String, officeHours: String, officeLocation: String): Doctor

    deleteDoctor(_id: ID!): Doctor

    createPatient( _id: ID!, name: String!, age: Int!, gender: String!, address: String!, phone: String!, email: String!, password: String!,): Auth

    updatePatient(_id: ID!, name: String, age: Int, gender: String, address: String, phone: String, email: String, password: String,): Patient

    deletePatient(_id: ID!): Patient

    createAdmin( _id: ID!, name: String!, email: String!,password: String!, phoneNumber:String!): Administrator

    updateAdmin( _id: ID!, name: String, email: String,password: String, phoneNumber:String): Administrator

    deleteAdmin(_id: ID!): Administrator


  }
`;

module.exports = typeDefs;
