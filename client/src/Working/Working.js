import React from "react";
import "./Working.css";
import AddWorking from "./AddWorking/AddWorking";
import WorkingList from "./WorkingList/WorkingList";

function Working() {
  return (
    <div className="working">
      <WorkingList />
    </div>
  );
}

export default Working;
