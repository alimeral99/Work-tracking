import React, { useState, useEffect } from "react";
import "./ComparisonWorking.css";
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

  const handleComparisonWorks = () => {
    comparisonWorks(dispatch, name, currentUser.token);
  };

  return (
    <div className="comparison-working">
      <div className="select-container">
        <label>enter your work name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <button onClick={handleComparisonWorks}>Search</button>
      </div>
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
