import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.min.css';
import Header from './components/Header/Header';
import AdminDash from './pages/AdminDash';
function App() {
  return (
    <div className="App">
      <Header />
      <AdminDash />
      </div>
      );
}
export default App;
