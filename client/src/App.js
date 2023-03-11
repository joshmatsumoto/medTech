import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.min.css';
import Header from './components/Header/Header';
import DoctorLogin from './components/DoctorLogin/DoctorLogin';
import NewDoctorForm from './components/NewDoctorForm/NewDoctorForm';
function App() {
  return (

    <div className="App">
      <Header />
      <DoctorLogin />
      </div>
      );
}

export default App;
