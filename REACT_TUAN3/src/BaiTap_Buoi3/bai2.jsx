import React, { useState } from 'react';
import DigitalClock from '../Component/Bai_2/DigitalClock';

const BaiTap2Buoi3 = () => {
  const [showClock, setShowClock] = useState(true);

  return (
    <div style={{ padding: '50px', backgroundColor: '#eef2f7', minHeight: '80vh', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '30px', color: '#333' }}>
        Buổi 3 - Bài 2: Digital Clock (useEffect)
      </h2>

      {/* Nút để test tính năng Mount/Unmount */}
      <button 
        onClick={() => setShowClock(!showClock)}
        style={{
          padding: '10px 20px',
          backgroundColor: showClock ? '#e74c3c' : '#2ecc71', // Đỏ nếu đang hiện, Xanh nếu đang ẩn
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
          fontSize: '16px'
        }}
      >
        {showClock ? "Tắt Đồng Hồ" : "Bật Đồng Hồ"}
      </button>

      {/* Chỉ hiển thị đồng hồ nếu showClock = true */}
      {showClock && <DigitalClock />}
      
      {!showClock && <p>Đồng hồ đã được gỡ bỏ khỏi giao diện.</p>}
    </div>
  );
};

export default BaiTap2Buoi3;