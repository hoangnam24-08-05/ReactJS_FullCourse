import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* MENU CHÍNH */}
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "15px",
          background: "#333",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <Link
          to="/user"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          User
        </Link>
        <Link
          to="/guest"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          Guest
        </Link>
        <Link
          to="/product"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          Product
        </Link>
      </nav>

      {/* KHU VỰC HIỂN THỊ TRANG CON (CHILDREN) */}
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          background: "#fff",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
