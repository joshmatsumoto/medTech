import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/custom.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}
export default App;
