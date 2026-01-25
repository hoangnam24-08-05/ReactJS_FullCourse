import React from "react";
import "./UserForm.css";
import { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <h3>Thông Tin Người Dùng</h3>
      <form action="">
        <div className="form-group">
          <label htmlFor="">Họ và Tên</label>
          <input
            type="text"
            name="userName"
            className="form-input"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Nhập tên của bạn vào đây..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Email: </label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="Nhập email của bạn vào đây..."
          />
        </div>
      </form>
      <div className="result-display">
        <h4>Kết Quả: </h4>
        <p>
          <strong>Tên: </strong>
          {formData.userName || "..."}
        </p>
        <p>
          <strong>Email: </strong>
          {formData.email || "..."}
        </p>
      </div>
    </div>
  );
};

export default UserForm;
