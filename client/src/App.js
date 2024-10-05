import { useEffect } from "react";
import "./app.css";
import Navbar from "./Navbar/Navbar";
import AddWorking from "./Working/AddWorking/AddWorking";
import ComparisonWorking from "./Working/ComparisonWorking/ComparisonWorking";
import Working from "./Working/Working";
import UpgradeForm from "./UpgradeForm/UpgradeForm";
import Register from "./Register/Register";
import Login from "./Register/Login";

import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { reset } from "./redux/Works/WorksSlice";
import { setUpgradetoUserPremium } from "./redux/User/UserSlice";

import socketIO from "socket.io-client";
import PrivateComponent from "./PrivateComponent";

function App() {
  const { isSuccess } = useSelector((state) => state.works);

  const dispatch = useDispatch();
  const socket = socketIO.connect("http://localhost:5000");

  useEffect(() => {
    socket.on("premiumUser", (premiumUser) => {
      dispatch(setUpgradetoUserPremium(premiumUser));
    });

    // Cleanup on component unmount
    return () => {
      socket.off("premiumUser");
    };
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        dispatch(reset());
      }, 3000);
    }
  }, [isSuccess, dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Working />} />
            <Route path="/addworking" element={<AddWorking />} />
            <Route path="/comparisonworking" element={<ComparisonWorking />} />
            <Route path="/upgradeform" element={<UpgradeForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
