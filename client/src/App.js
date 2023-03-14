import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/custom.min.css";
import Header from "./components/Header/Header";
import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDash from './pages/AdminDash';
import NewDoctorForm from './components/NewDoctorForm/NewDoctorForm';
//import DoctorLogin from './components/DoctorLogin/DoctorLogin';



function App() {
  return (
    <div className="App">
      <Header />
      <AdminDash />
      <AdminLogin />
      <AppointmentForm />
      <NewDoctorForm />

    </div>
    );
}
export default App;
