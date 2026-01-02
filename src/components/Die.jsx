import React from "react";
import "./Die.css";

const Die = ({ val, rolling }) => {
  return <div className={`Die ${rolling ? "rolling" : ""}`}>{val}</div>;
};

export default Die;
