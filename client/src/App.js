import { useEffect } from "react";
import "./app.css";
import Navbar from "./Navbar/Navbar";
import AddWorking from "./Working/AddWorking/AddWorking";
import ComparisonWorking from "./Working/ComparisonWorking/ComparisonWorking";
import Working from "./Working/Working";

import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { reset } from "./redux/Works/WorksSlice";

function App() {
  const { error, isSuccess, alert } = useSelector((state) => state.works);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error || isSuccess || alert) {
      setTimeout(() => {
        dispatch(reset());
      }, 3000);
    }
  }, [error, isSuccess, alert]);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Working />} />
          <Route path="/addworking" element={<AddWorking />} />
          <Route path="/comparisonworking" element={<ComparisonWorking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
