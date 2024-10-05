import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateComponent() {
  const { currentUser } = useSelector((state) => state.user);

  console.log(currentUser);

  return currentUser ? <Outlet /> : <Navigate to="/register" />;
}

export default PrivateComponent;
