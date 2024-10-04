import React from "react";
import "./Working.css";
import WorkingList from "./WorkingList/WorkingList";
import SearchWorking from "./SearchWorking/SearchWorking";
import WorkingLinks from "./WorkingLinks/WorkingLinks";

function Working() {
  return (
    <div className="working">
      <WorkingLinks />
      <SearchWorking />
      <WorkingList />
    </div>
  );
}

export default Working;
