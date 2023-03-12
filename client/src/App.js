import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.min.css';
import Header from './components/Header/Header';
import NewAdmin from './components/NewAdminForm/NewAdminForm';
function App() {
  return (
    <div className="App">
      <Header />
      <NewAdmin />
      </div>
      );
}
export default App;
