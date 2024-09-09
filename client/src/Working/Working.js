import React from "react";
import "./Working.css";
import WorkingList from "./WorkingList/WorkingList";
import SearchWorking from "./SearchWorking/SearchWorking";

import { Link } from "react-router-dom";

function Working() {
  return (
    <div className="working">
      <div className="working-links">
        <Link to={"/addworking"} className={"link-styles createWork-links"}>
          +
        </Link>
      </div>

      <SearchWorking />
      <WorkingList />
    </div>
  );
}

export default Working;
