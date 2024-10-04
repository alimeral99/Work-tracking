import React from "react";
import "./Navbar.css";
import { logout } from "../redux/User/UserSlice";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import storage from "redux-persist/lib/storage";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    storage.removeItem("persist:root");
  };

  return (
    <div className="navbar">
      <h1 className="navbar-logo">Work Tracking </h1>
      <div className="nav-links">
        {currentUser ? (
          <Link to={"/login"} onClick={handleLogout} className="link">
            Logout
          </Link>
        ) : (
          <>
            <Link className="link" to={"/register"}>
              Register
            </Link>
            <Link className="link " to={"/login"}>
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
