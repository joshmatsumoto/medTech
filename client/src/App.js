import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/custom.min.css";
import Header from "./components/Header/Header";
import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
import AdminLogin from "./components/AdminLogin/AdminLogin";

function App() {
  return (
    <div className="App">
      <Header />
      <AdminLogin />
      <AppointmentForm />

    </div>
    );
}
export default App;
