import { gql } from '@appollo/client';

export const LOGIN = gql`
mutation login($userType: String!, $email: String!, $password: String!) {
  login(userType: $userType, email: $email, password: $password) {
    token
    patient{
    _id
    }||
    doctor{
    _id
    }||
    admin{
    _id
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
`;

