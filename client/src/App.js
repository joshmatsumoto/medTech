import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.min.css';
import Header from './components/Header/Header';
import PatientLogin from './components/PatientLogin/PatientLogin';
function App() {
  return (
    <div className="App">
      <Header />
      <PatientLogin />
      </div>
      );
}
export default App;
