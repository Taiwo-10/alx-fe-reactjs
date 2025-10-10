import React from "react";
import { Navigate } from "react-router-dom";


const isAuthenticated = () => {
 
  return localStorage.getItem("auth") === "true";
};

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    <Navigate to="/login" replace />;
  }

  
  return children;
}
