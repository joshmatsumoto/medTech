import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/custom.min.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Home/>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </>

     
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
