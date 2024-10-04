import React from "react";
import "./WorkingLinks.css";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";

function WorkingLinks() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="working-links">
      <Link to={"/addworking"} className={"link-styles links"}>
        <IoMdAdd className="link-icon" />
      </Link>

      <Link to={"/comparisonworking"} className={"link-styles links"}>
        <MdOutlineCompareArrows className="link-icon" />
      </Link>

      {currentUser.role === "premium" ? (
        <Link className={"link-styles links"}>
          <MdOutlineWorkspacePremium className="link-icon" />
        </Link>
      ) : (
        <Link to={"/upgradeform"} className={"link-styles links"}>
          <GiUpgrade className="link-icon" />
        </Link>
      )}
    </div>
  );
}

export default WorkingLinks;
