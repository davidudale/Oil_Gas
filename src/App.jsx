import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/MainComponent/Homepage";
import Login from "./Components/Page/Login.jsx";
import Register from "./Components/Page/Register.jsx";
import { ToastContainer } from "react-toastify";
import { ProtectedRoute } from "./Components/Auth/ProtectedRoute.jsx";
import AdminDashboard from "./Components/Page/AdminDashboard.jsx";
import Supervisor from "./Components/Page/SupervisorDashboard.jsx";
import Unauthorized from "./Components/Page/UnauthorizedPage.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Supervisor & Above */}
        <Route
          path="/SupervisorDashboard"
          element={
            <ProtectedRoute allowedRoles={["Supervisor", "Manager", "Admin"]}>
              <Supervisor />
            </ProtectedRoute>
          }
        />

        {/* Admin Only */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}
export default App;
