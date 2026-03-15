import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Trang Quản Trị (Dashboard)</h2>

      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <Link to="users">Quản lý Users</Link>
        <Link to="profile">Profile của tôi</Link>
      </div>

      <div
        style={{
          padding: "15px",
          background: "#f9f9f9",
          borderLeft: "4px solid #4CAF50",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
