import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.min.css';
import Header from './components/Header/Header';
import NewPatientForm from './components/NewPatientForm/NewPatientForm';
function App() {
  return (
    <div className="App">
      <Header />
      <NewPatientForm />
      </div>
      );
}
export default App;
