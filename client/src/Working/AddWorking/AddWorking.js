import React, { useState } from "react";
import "./AddWorking.css";
import Alert from "../Alert";
import API_URL from "../../api";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddWorking() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [durations, setDurations] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const navigate = useNavigate();

  const addWorks = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/api/addworks`, {
        date: date,
        name: name,
        duration: durations,
      });

      if (res) {
        // setResponseMessages(res.data);
        showAlert(true, "#28a745", res.data);
        // navigate("/working");
      }
    } catch (error) {
      showAlert(true, "#b30000", error.response.data);
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <div className="add-working">
      <form onSubmit={addWorks}>
        <h2 className="form-header">Add Working</h2>

        {alert.show && <Alert {...alert} removeAlert={showAlert} />}

        <div className="input-container">
          <label>Date</label>
          <input
            placeholder="date"
            onChange={(e) => setDate(e.target.value)}
            type="date"
            min="1924-04-01"
            max="2100-04-30"
          />
        </div>

        <div className="input-container">
          <label>Name </label>
          <input
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>

        <div className="input-container">
          <label>Durations</label>
          <input
            placeholder="duration"
            onChange={(e) => setDurations(e.target.value)}
            type="number"
          />
        </div>

        <div className="button-container">
          <button className="add-button">Add Working</button>
        </div>
      </form>
    </div>
  );
}

export default AddWorking;
