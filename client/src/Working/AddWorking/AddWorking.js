import React, { useState } from "react";
import "./AddWorking.css";
import API_URL from "../../api";

import axios from "axios";

function AddWorking() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [durations, setDurations] = useState("");

  const addWorks = async (e) => {
    e.preventDefault();

    console.log(API_URL);

    try {
      const res = await axios.post(`${API_URL}/api/addworks`, {
        date: date,
        name: name,
        duration: durations,
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-working">
      <form onSubmit={addWorks}>
        <h2 className="form-header">Add Working</h2>

        <div className="input-container">
          <label>Date</label>
          <input
            placeholder="date"
            onChange={(e) => setDate(e.target.value)}
            type="date"
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
