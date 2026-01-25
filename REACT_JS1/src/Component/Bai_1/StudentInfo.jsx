import React from "react";
import "./StudentInfo.css";

const StudentInfo = ({ name, mssv, lop }) => {
  return (
    <div className="student-card">
      <div className="avatar-placeholder">{name.charAt(0).toUpperCase()}</div>
      <div className="info-content">
        <h3>Thông tin sinh viên</h3>
        <p>
          <strong>Họ và tên:</strong> {name}
        </p>
        <p>
          <strong>MSSV:</strong> {mssv}
        </p>
        <p>
          <strong>Lớp:</strong> {lop}
        </p>
      </div>
    </div>
  );
};

export default StudentInfo;
