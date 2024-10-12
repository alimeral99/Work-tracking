import React, { useState, useEffect } from "react";
import "./ComparisonWorking.css";
import AlertModal from "./AlertModal";

import { comparisonWorks } from "../../redux/Works/WorkApi";
import { reset } from "../../redux/Works/ComparisonWorkSlice";

import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function ComparisonWorking() {
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { comparedWorks, comparisonAlert } = useSelector(
    (state) => state.comparisonWorks
  );
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const handleOpenModal = () => {
    if (currentUser.role !== "premium") {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleComparisonWorks = (e) => {
    e.preventDefault();
    comparisonWorks(dispatch, name, currentUser.token);
  };

  return (
    <div className="comparison-working">
      {isModalOpen && <AlertModal onClose={handleCloseModal} />}

      <form onSubmit={handleComparisonWorks} className="select-container">
        <label>Click enter your work name</label>

        <input
          onFocus={handleOpenModal}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          disabled={currentUser.role !== "premium" && name.length > 0}
        />

        <button disabled={currentUser.role !== "premium"}>Search</button>
      </form>
      {comparisonAlert ? (
        <Alert severity="info">{comparisonAlert}</Alert>
      ) : comparedWorks ? (
        <ResponsiveContainer width="60%" height={400}>
          <BarChart width={720} height={300} data={comparedWorks}>
            <XAxis dataKey="month" stroke="#242424" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />

            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="totalDuration" fill="#8884d8" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <h2>Enter the work you want to compare</h2>
      )}
    </div>
  );
}

export default ComparisonWorking;
