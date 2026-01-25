import React from "react";
import "./Button.css";
const Button = ({ type, children, onClick }) => {
  const buttonClass = `btn btn-${type}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
