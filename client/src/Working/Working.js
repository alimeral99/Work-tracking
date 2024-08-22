import React from "react";
import "./Working.css";
import WorkingList from "./WorkingList/WorkingList";
import SearchWorking from "./SearchWorking/SearchWorking";

function Working() {
  return (
    <div className="working">
      <SearchWorking />
      <WorkingList />
    </div>
  );
}

export default Working;
