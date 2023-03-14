import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/custom.min.css";

import Header from "./components/Header/Header";
import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import NewDoctorForm from "./components/NewDoctorForm/NewDoctorForm";
//import DoctorLogin from './components/DoctorLogin/DoctorLogin';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </>

      <AdminLogin />
      <AppointmentForm />
      <NewDoctorForm />
    </div>
  );
}
export default App;
