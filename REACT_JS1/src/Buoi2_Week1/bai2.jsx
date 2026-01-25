import React from "react";
import Counter from "../Component/Bai_2/Counter";

const Bai2 = () => {
  return (
    <div
      style={{ padding: "50px", backgroundColor: "#f0f2f5", minHeight: "60vh" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
        Bài 2: Counter
      </h2>
      <Counter />
    </div>
  );
};

export default Bai2;
