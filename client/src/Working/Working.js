import React from "react";
import "./Working.css";
import WorkingList from "./WorkingList/WorkingList";
import SearchWorking from "./SearchWorking/SearchWorking";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Working() {
  const { error, isSuccess } = useSelector((state) => state.works);

  return (
    <div className="working">
      <div className="working-links">
        <Link to={"/addworking"} className="createWork-links">
          +
        </Link>
      </div>
      <SearchWorking />
      <WorkingList />
    </div>
  );
}

export default Working;
