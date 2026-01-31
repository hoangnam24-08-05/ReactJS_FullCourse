import React from "react";
import ProductFilter from "../Component/Bai_3/ProductFilter";

const Bai3 = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        paddingBottom: "50px",
      }}
    >
      <div style={{ padding: "30px", textAlign: "center" }}></div>
      <h2 style={{ color: "#333" }}>Bài 3</h2>
      <p>f12 xem kêt quả</p>
      <ProductFilter />
    </div>
  );
};

export default Bai3;
