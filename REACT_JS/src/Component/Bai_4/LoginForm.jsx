import React from "react";
import "./LoginForm.css";

const LoginForm = ({ isOpen, onClose }) => {
  const handleFormClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="login-form" onClick={handleFormClick}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="form-title">Đăng nhập</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label className="input-label">Tên đăng nhập</label>
            <input
              type="text"
              className="form-input"
              placeholder="Nhập tên đăng nhập..."
            />
          </div>

          <div className="input-group">
            <label className="input-label">Mật khẩu</label>
            <input
              type="password"
              className="form-input"
              placeholder="Nhập mật khẩu..."
            />
          </div>
          <button type="submit" className="login-btn">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
