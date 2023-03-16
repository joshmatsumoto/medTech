import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/custom.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DocDashboardNavs from "./pages/DocDash";
import PatDashboardNavs from "./pages/PatDash"
import NewAdminForm from "./components/NewAdminForm/NewAdminForm";
import AdminDashboardNavs from "./pages/AdminDash";
import PatientForm from "./components/NewPatientForm/NewPatientForm";
import DoctorForm from "./components/NewDoctorForm/NewDoctorForm";
import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/docdashboard" element={<DocDashboardNavs />} />
            <Route exact path="/docdashboard/appform" element={<AppointmentForm />} />
            <Route exact path="/docdashboard/patform" element={<PatientForm />} />
            <Route exact path="/patdashboard" element={<PatDashboardNavs />} />
            <Route exact path="/patdashboard/appform" element={<AppointmentForm />} />
            <Route exact path="/admindashboard/" element={<AdminDashboardNavs />} />
            <Route exact path="/admindashboard/patientForm" element={<PatientForm />} />
            <Route exact path="/admindashboard/docForm" element={<DoctorForm />} />
            <Route exact path="/admindashboard/adminForm" element={<NewAdminForm />} />
          </Routes>
        </Router>
        </ApolloProvider>,
      </>
    </div>
  );
}
export default App;
