import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/custom.min.css";
//import Header from "./components/Header/Header";
// import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
// import AdminLogin from "./components/AdminLogin/AdminLogin";

// import NewDoctorForm from './components/NewDoctorForm/NewDoctorForm';
// import DoctorLogin from './components/DoctorLogin/DoctorLogin';
//import Footer from './components/Footer/Footer';
// import NewAdminForm from "./components/NewAdminForm/NewAdminForm";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      {/* <Header />
      
      /* <AdminLogin />
      <AppointmentForm />
  <NewDoctorForm /> \ */}
      {/* <Footer/> */}
      {/* <NewAdminForm/> */}
    
       <Home/>

    </div>
    );
}
export default App;
