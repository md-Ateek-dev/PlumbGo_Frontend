import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUserToken } from "../Services/AuthUser"

const UserProtectedRoute = ({ children }) => {
  const token = getUserToken();
  const location = useLocation();

  if (!token) {
    // not logged in → login pe bhejo + wapas redirect info
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
};

export default UserProtectedRoute;
