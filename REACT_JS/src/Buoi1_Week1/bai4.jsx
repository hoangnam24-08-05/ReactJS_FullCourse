import React from "react";
import LoginForm from "../Component/Bai_4/LoginForm";
import Button from "../Component/Bai_2/Button";
import { useState } from "react";

const Bai4 = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h2>Bài 4: Login Form Component</h2>
      <p style={{ marginBottom: "20px", color: "#555" }}>
        {" "}
        Nhấn nút bên dưới để đăng nhập
      </p>
      <Button type="primary" onClick={() => setIsLoginOpen(true)}>
        Mở Form Đăng Nhập
      </Button>
      <LoginForm isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Bai4;
