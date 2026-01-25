import React from "react";
import "./StatusBadge.css";

const StatusBadge = ({ status }) => {
  const clasName = `status-badge ${status}`;
  const statusText = {
    online: "Đang hoạt động",
    offline: "Ngoại tuyến",
    busy: "Đừng làm phiền",
  };
  return <span className={clasName}>{statusText[status] || status}</span>;
};

export default StatusBadge;
