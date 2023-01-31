import Home from "./pages/Home"
import Login from "./pages/Login";
import React from "react";
import './assets/css/app.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import AddUser from "./pages/AddUser";

function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes >
    </Router>
  );
}

export default App;




