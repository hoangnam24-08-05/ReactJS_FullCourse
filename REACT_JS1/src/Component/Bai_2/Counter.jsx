import React from "react";
import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handlereset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h3>Counter</h3>

      <div className={`count-display ${count > 10 ? "count-high" : ""}`}>
        {count}
      </div>
      <div className="button-group">
        <button className="btn-count btn-dec" onClick={handleDecrement}>
          {" "}
          -{" "}
        </button>
        <button className="btn-count btn-res" onClick={handlereset}>
          {" "}
          Reset{" "}
        </button>
        <button className="btn-count btn-inc" onClick={handleIncrement}>
          {" "}
          +{" "}
        </button>
      </div>

      {/* {count > 10 && (
        <p style={{ color: "red", fontSize: "12px" }}>
          Cảnh báo số đếm vượt quá 10!
        </p>
      )} */}
    </div>
  );
};

export default Counter;
