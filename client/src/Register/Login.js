import React, { useState, useEffect } from "react";
import { login } from "../redux/User/userApi";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Alert from "@mui/material/Alert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, email, password);
  };

  return (
    <div className="register">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <Alert severity="error">{error}</Alert>}
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

export default Login;
