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
import Topbar from "./components/Topbar/Topbar";
import { usersSelector } from './store/userSlice';
import { useSelector } from 'react-redux'
import Employees from "./pages/Employees";
import Edit_User from "./pages/EditUser";

function App() {
  const { user } = useSelector(usersSelector)

  return (
    <Router>
      <Topbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-user" element={['Admin', 'HR'].includes(user.role) ? < AddUser /> : <div>You are not authorize</div>} />
        <Route path="/employees" element={['Admin', 'HR'].includes(user.role) ? < Employees /> : <div>You are not authorize</div>} />
        <Route path="/employees/user/:id" element={['Admin', 'HR'].includes(user.role) ? < Edit_User /> : <div>You are not authorize</div>} />

      </Routes >
    </Router>
  );
}

export default App;




