import React, { useState, useEffect } from "react";
import "./AddWorking.css";
import { createWorks } from "../../redux/Works/WorkApi";
import { reset } from "../../redux/Works/WorksSlice";

import Alert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddWorking() {
  const [date, setDate] = useState(new Date(Date.now()));
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { error, isSuccess } = useSelector((state) => state.works);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }

    dispatch(reset());
  }, [isSuccess, navigate, dispatch]);

  const handleAddWorks = async (e) => {
    e.preventDefault();

    const createContent = {
      date,
      name,
      duration,
    };

    createWorks(dispatch, createContent);
  };

  return (
    <div className="add-working">
      <form onSubmit={handleAddWorks}>
        <h2 className="form-header">Add Working</h2>
        {error && <Alert severity="error">{error}</Alert>}

        <div className="test-container">
          <div className="input-container">
            <label>Date</label>

            <DatePicker
              wrapperClassName="date-picker"
              selected={date}
              onChange={(date) => setDate(date)}
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
              onChange={(e) => setDuration(e.target.value)}
              type="number"
            />
          </div>

          <div className="button-container">
            <button className="add-button">Add Working</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddWorking;
