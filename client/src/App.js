import { useEffect } from "react";
import "./app.css";
import Navbar from "./Navbar/Navbar";
import AddWorking from "./Working/AddWorking/AddWorking";
import ComparisonWorking from "./Working/ComparisonWorking/ComparisonWorking";
import Working from "./Working/Working";
import PaymentForm from "./PaymentForm/PaymentForm";
import Register from "./Register/Register";
import Success from "./Success/Success";
import Login from "./Register/Login";

import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { reset } from "./redux/Works/WorksSlice";

function App() {
  const { isSuccess } = useSelector((state) => state.works);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        dispatch(reset());
      }, 3000);
    }
  }, [isSuccess]);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Working />} />
          <Route path="/addworking" element={<AddWorking />} />
          <Route path="/comparisonworking" element={<ComparisonWorking />} />
          <Route path="/paymentform" element={<PaymentForm />} />
          <Route path="/login" element={<Login />} />

          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
