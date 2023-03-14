import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/custom.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
// import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
// import AdminLogin from "./components/AdminLogin/AdminLogin";
// import AdminDash from './pages/AdminDash';
// import NewDoctorForm from "./components/NewDoctorForm/NewDoctorForm";
// import DoctorLogin from './components/DoctorLogin/DoctorLogin';
// import NewAdminForm from "./components/NewAdminForm/NewAdminForm";

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

      <Header />
      {/* <AdminDash /> */}
      {/* <AdminLogin />
      <AppointmentForm />
      <NewDoctorForm /> */}
      <Footer></Footer>
      {/* <NewAdminForm/> */}
    </div>
  );
}
export default App;
