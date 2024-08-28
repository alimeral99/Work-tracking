import { useEffect } from "react";
import "./app.css";
import Navbar from "./Navbar/Navbar";
import AddWorking from "./Working/AddWorking/AddWorking";
import Working from "./Working/Working";

import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { reset } from "./redux/Works/WorksSlice";

function App() {
  const { error, isSuccess } = useSelector((state) => state.works);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error || isSuccess) {
      setTimeout(() => {
        dispatch(reset());
      }, 3000);
    }
  }, [error, isSuccess]);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/working" element={<Working />} />
          <Route path="/addworking" element={<AddWorking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
