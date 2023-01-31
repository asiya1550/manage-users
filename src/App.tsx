import Home from "./pages/Home"
import Login from "./pages/Login";
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes >
    </Router>
  );
}

export default App;




