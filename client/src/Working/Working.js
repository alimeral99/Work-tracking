import React from "react";
import { useEffect, useState } from "react";
import "./Working.css";
import WorkingList from "./WorkingList/WorkingList";

function Working() {
  return (
    <div className="working">
      <WorkingList />
    </div>
  );
}

export default Working;
