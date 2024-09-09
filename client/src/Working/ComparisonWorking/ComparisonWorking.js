import React, { useState } from "react";
import "./ComparisonWorking.css";
import { comparisonWorks } from "../../redux/Works/WorkApi";

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

  const { comparedWorks } = useSelector((state) => state.comparisonWorks);
  const { alert } = useSelector((state) => state.works);

  const dispatch = useDispatch();

  const handleComparisonWorks = () => {
    comparisonWorks(dispatch, name);
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
      {alert ? (
        <Alert severity="info">{alert}</Alert>
      ) : (
        <ResponsiveContainer width="60%" height={400}>
          <BarChart width={720} height={300} data={comparedWorks}>
            <XAxis dataKey="month" stroke="#242424" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />

            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="totalDuration" fill="#8884d8" barSize={30} />
          </BarChart>{" "}
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ComparisonWorking;
