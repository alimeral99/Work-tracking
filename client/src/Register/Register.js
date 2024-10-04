import React, { useState, useEffect } from "react";
import "./Register.css";
import { register } from "../redux/User/userApi";
import { reset } from "../redux/User/UserSlice";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, successRedirect } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (successRedirect) {
      navigate("/login");
    }

    dispatch(reset());
  }, [successRedirect]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    register(dispatch, username, email, password);
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <Alert severity="error">{error}</Alert>}

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="register-buttonContainer">
          <button className="formGroup-button" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
