import React, { useState } from "react";
import "./App.css";

import Bai1 from "./baitap/bai1";
import Bai2 from "./baitap/bai2";
function App() {
  const [currentBai, setCurrentBai] = useState(1);

  const renderContent = () => {
    switch (currentBai) {
      case 1:
        return <Bai1 />;
      case 2:
        return <Bai2 />;
      default:
        return <Bai1 />;
    }
  };

  return (
    <div className="App">
      <div className="taskbar">
        {/* ... giữ các nút cũ */}

        {/* Thêm nút mới */}
        <button
          className={currentBai === 1 ? "tab-btn active" : "tab-btn"}
          onClick={() => setCurrentBai(1)}
          style={{ backgroundColor: "green" }}
        >
          Review Hooks
        </button>
        <button
          className={currentBai === 2 ? "tab-btn active" : "tab-btn"}
          onClick={() => setCurrentBai(2)}
          style={{ backgroundColor: "blue" }}
        >
          Review API
        </button>
      </div>

      <div className="content-container">{renderContent()}</div>
    </div>
  );
}

export default App;
