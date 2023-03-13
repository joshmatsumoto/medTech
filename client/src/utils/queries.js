import { gql } from '@apollo/client';

export const QUERY_DOCTORS = gql`
     {
        doctors {
            userType
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
`;

export const QUERY_DOCTOR = gql`
    query doctor($patients: [ID])
     {
        doctor(patients:$patients) {
            userType
            _id
            name
            email
            password
            department
            doctorScore
            officeHours
            officeLocation
            patients {
                _id   
            }
        }
    }
`;

export const QUERY_PATIENT = gql`
    query patient($appointments: [ID], $doctor:ID)
     {
        patient(appointments:$appointments, doctor:$doctor) {
            userType
            _id
            name
            age
            gender
            address
            phone
            email
            password
            appointments{
                _id
                dateTime
                reason
            }
            doctor{
                _id
            }
        }
    }
`;


export const QUERY_PATIENTS = gql`
     {
        patient
        {
            userType
            _id
            name
            age
            gender
            address
            phone
            email
            password
            appointments{
                _id
                dateTime
                reason
            }
            doctor{
                _id
            }
        }
    }
`;

export const QUERY_ADMINISTRATORS = gql`
     {
        administrators {
            userType
            _id
            name
            email
            password
            phoneNumber
        }
    }
`;
export const QUERY_APPOINTMENTS = gql`
    {
    appointments{
        _id
        dateTime
        reason
    }
`;
