import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation Login($userType: String!, $email: String!, $password: String!) {
  login(userType: $userType, email: $email, password: $password) {
    token
    user {
      ... on Patient {
        _id
      }
      ... on Doctor {
        _id
      }
      ... on Admin {
        _id
      }
    }
  }
}
`;

export const ASSIGN_DOCTOR = gql`
  mutation assignDoctor(
    $doctor: ID!)
    { assignDoctor(doctor: $doctor)
      {
        doctor{
          _id
          name
          email
          password
          department
          doctorScore
          officeHours
          officeLocation
        }
      } 
    }
`;

export const ASSIGN_PATIENT = gql`
  mutation assignPatient(
    $patients: [ID]!)
    { assignPatient(patients: $patients)
      {
        patients{
          _id
          name
          age
          gender
          address
          phone
          email
          password
        }
      } 
    }
`;


export const ADD_PATIENT = gql`
mutation addPatient(
$name: String!,
$age: Int!,
$gender: String!,
$address: String!,
$phone: String!,
$email: String!,
$password: String!,
) {
  addPatient(
    name: $name
    age: $age
    gender: $gender
    address: $address
    phone: $phone
    email: $email
    password: $password
  ) {
    token
    patient{
      _id
    }
  }
}
`;

export const ADD_DOCTOR = gql`
mutation addDoctor(
$name: String!,
$email: String!,
$password: String!,
$department: String!,
$officeHours: String!,
$officeLocation: String!,
) {
  addDoctor(
    name: $name
    email: $email
    password: $password
    department: $department
    officeHours: $officeHours
    officeLocation: $officeLocation
  ) {
    token
    doctor{
      _id
    }
  }
}
`;

export const ADD_ADMIN = gql`
mutation addAdmin(
$name: String!,
$email: String!,
$password: String!,
$phoneNumber: String!,
) {
  addAdmin(
    name: $name
    email: $email
    password: $password
    phoneNumber: $phoneNumber
  ) {
    token
    administrator{
      _id
    }
  }
}
`;

export const ADD_APPOINTMENT = gql`
mutation addAppointment(
$dateTime: String!,
$reason: String,
) {
  addAppointment
  (
  dateTime:$dateTime
  reason: $reason
  )
  }
  {
  appointment{
    _id
    dateTime
    reason
  }
  }
`;

