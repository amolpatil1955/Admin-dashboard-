import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Dashboard from "./Admin/Dashbord";
import Navbar from "./components/Navbar";
import Chatapp from "./Pages/ChatApp"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>

          {/* Login */}
          <Route path="/" element={<Login />} />

          {/* After Login → Show Navbar + Pages */}
          <Route path="/home" element={<Navbar />}>
          </Route>

          {/* Other Routes */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chatapp />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
