import React from "react";
import StatusBadge from "../Component/Bai_4/StatusBadge";
import { useState } from "react";

const Bai4 = () => {
  const [currentStatus, setCurrentStatus] = useState("offline");
  return (
    <div
      style={{
        padding: "50px",
        backgroundColor: "#f8f9fa",
        minHeight: "60vh",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "30px", color: "#343a40" }}>
        Bài Tập 4: Dynamic Styling with Props
      </h2>
      <div style={{ marginBottom: "40px" }}>
        <p style={{ marginBottom: "10px", color: "#666" }}>
          Trạng thái hiện tại:
        </p>
        <StatusBadge status={currentStatus} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <button
          onClick={() => setCurrentStatus("online")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            background: "#2ecc71",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Set Online
        </button>
        <button
          onClick={() => setCurrentStatus("offline")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            background: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Set Offline
        </button>
        <button
          onClick={() => setCurrentStatus("busy")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            background: "#95a5a6",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Set Busy
        </button>
      </div>
    </div>
  );
};

export default Bai4;
