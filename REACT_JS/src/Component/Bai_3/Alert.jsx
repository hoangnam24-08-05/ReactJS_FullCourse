import React from "react";
import "./Alert.css";

const Alert = ({ type, text }) => {
  if (!text) return null;

  return (
    <div className={`alert alert-${type}`}>
      <span>{text}</span>
    </div>
  );
};

export default Alert;
