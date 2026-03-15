import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Trang Chủ (Home)</h2>
      <p>Đây là component Home.</p>
      <button
        onClick={() => navigate("/products")}
        style={{
          padding: "8px 16px",
          cursor: "pointer",
          background: "#007bff",
          color: "white",
          border: "none",
        }}
      >
        Chuyển đến trang Products (Programmatic Route)
      </button>
    </div>
  );
};

export default Home;
