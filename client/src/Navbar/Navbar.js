import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="navbar">
      <h1 className="navbar-logo">Work Tracking {currentUser?.username}</h1>
      <div className="nav-links">
        <Link className="link" to={"/register"}>
          Register
        </Link>
        <Link className="link " to={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
