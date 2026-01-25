import React, { useState } from "react";
import "./App.css";

// Import các bài tập
import Bai1 from "./Buoi2_Week1/bai1";
import Bai2 from "./Buoi2_Week1/bai2";
import Bai3 from "./Buoi2_Week1/bai3";
import Bai4 from "./Buoi2_Week1/bai4";
import Bai5 from "./Buoi2_Week1/bai5";

function App() {
  const [currentBai, setCurrentBai] = useState(1);

  // Hàm hiển thị nội dung dựa trên state
  const renderContent = () => {
    switch (currentBai) {
      case 1:
        return <Bai1 />;
      case 2:
        return <Bai2 />;
      case 3:
        return <Bai3 />;
      case 4:
        return <Bai4 />;
      case 5:
        return <Bai5 />;
      default:
        return <Bai1 />;
    }
  };

  return (
    <div className="App">
      {/* --- TASKBAR (THANH ĐIỀU HƯỚNG) --- */}
      <div className="taskbar">
        <button
          className={currentBai === 1 ? "tab-btn active" : "tab-btn"}
          onClick={() => setCurrentBai(1)}
        >
          Bài 1
        </button>
        <button
          className={currentBai === 2 ? "tab-btn active" : "tab-btn"}
          onClick={() => setCurrentBai(2)}
        >
          Bài 2
        </button>
        <button
          className={currentBai === 3 ? "tab-btn active" : "tab-btn"}
          onClick={() => setCurrentBai(3)}
        >
          Bài 3
        </button>
        <button
          className={currentBai === 4 ? "tab-btn active" : "tab-btn"}
          onClick={() => setCurrentBai(4)}
        >
          Bài 4
        </button>
        <button
          className={currentBai === 5 ? "tab-btn active" : "tab-btn"}
          onClick={() => setCurrentBai(5)}
        >
          Bài 5
        </button>
      </div>

      {/* --- KHUNG HIỂN THỊ NỘI DUNG --- */}
      <div className="content-container">{renderContent()}</div>
    </div>
  );
}

export default App;
