import React from "react";
import "./ComparisonWorking.css";
import { comparisonWorks } from "../../redux/Works/WorkApi";

import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

function ComparisonWorking() {
  const { comparedWorks } = useSelector((state) => state.comparisonWorks);

  const dispatch = useDispatch();

  const handleComparisonWorks = () => {
    comparisonWorks(dispatch);
  };

  return (
    <div className="comparison-working">
      <BarChart width={700} height={300} data={comparedWorks}>
        <XAxis dataKey="month" stroke="#242424" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />

        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="totalDuration" fill="#8884d8" barSize={30} />
      </BarChart>{" "}
      <button onClick={handleComparisonWorks}>test</button>
    </div>
  );
}

export default ComparisonWorking;
