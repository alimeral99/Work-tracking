import "./app.css";
import Navbar from "./Navbar/Navbar";
import AddWorking from "./Working/AddWorking/AddWorking";
import Working from "./Working/Working";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
