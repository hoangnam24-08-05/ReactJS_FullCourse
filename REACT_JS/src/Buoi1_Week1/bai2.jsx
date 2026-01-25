import React from "react";
import Button from "../Component/Bai_2/Button";

const Bai2 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <h2
        style={{
          color: "#333",
        }}
      >
        Bài 2: Button Component
      </h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Button type="primary" onClick={() => alert("Clicked Primary!")}>
          Primary Button
        </Button>
        <Button type="success" onClick={() => alert("Clicked Success!")}>
          Success Button
        </Button>
        <Button type="danger" onClick={() => alert("Clicked Danger!")}>
          Danger Button
        </Button>
      </div>
    </div>
  );
};
export default Bai2;
