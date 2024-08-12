import React from "react";
import "./AddWorking.css";

function AddWorking() {
  return (
    <div className="add-working">
      <form>
        <h2 className="form-header">Add Working</h2>

        <div className="input-container">
          <label>Date</label>
          <input placeholder="date" type="date" />
        </div>

        <div className="input-container">
          <label>Name </label>
          <input placeholder="name" type="text" />
        </div>

        <div className="input-container">
          <label>Durations</label>
          <input placeholder="duration" type="number" />
        </div>

        <div className="button-container">
          <button className="add-button">Add Working</button>
        </div>
      </form>
    </div>
  );
}

export default AddWorking;
