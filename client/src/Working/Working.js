import React from "react";
import "./Working.css";
import WorkingList from "./WorkingList/WorkingList";
import SearchWorking from "./SearchWorking/SearchWorking";

import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";

function Working() {
  return (
    <div className="working">
      <div className="working-links">
        <Link to={"/addworking"} className={"link-styles links"}>
          <IoMdAdd className="link-icon" />
        </Link>

        <Link to={"/comparisonworking"} className={"link-styles links"}>
          <MdOutlineCompareArrows className="link-icon" />
        </Link>
      </div>

      <SearchWorking />
      <WorkingList />
    </div>
  );
}

export default Working;
