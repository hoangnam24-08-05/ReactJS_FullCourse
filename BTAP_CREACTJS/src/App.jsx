import React, { useState } from "react";
import "./App.css";

// --- IMPORT BÀI TẬP 1 ---
import CauA_BT1 from "./component/btap/cau_a";
import CauB_BT1 from "./component/btap/cau_b";
import CauC_BT1 from "./component/btap/cau_c";
import CauD_BT1 from "./component/btap/cau_d";
import CauE_BT1 from "./component/btap/cau_e";

// --- IMPORT BÀI TẬP 2 ---
import CauA_BT2 from "./component/btap2/cau_a";
import CauB_BT2 from "./component/btap2/cau_b";
import CauC_BT2 from "./component/btap2/cau_c";
import CauD_BT2 from "./component/btap2/cau_d";

function App() {
  const [mainTab, setMainTab] = useState(2); // Mặc định mở luôn Bài 2 cho bạn dễ test
  const [subTab, setSubTab] = useState("a");

  // Hàm chuyển Bài tập
  const handleSwitchMainTab = (tab) => {
    setMainTab(tab);
    setSubTab("a"); // Tự động reset về câu A khi đổi bài
  };

  const renderBT1 = () => {
    switch (subTab) {
      case "a":
        return <CauA_BT1 />;
      case "b":
        return <CauB_BT1 />;
      case "c":
        return <CauC_BT1 />;
      case "d":
        return <CauD_BT1 />;
      case "e":
        return <CauE_BT1 />;
      default:
        return <CauA_BT1 />;
    }
  };

  const renderBT2 = () => {
    switch (subTab) {
      case "a":
        return <CauA_BT2 />;
      case "b":
        return <CauB_BT2 />;
      case "c":
        return <CauC_BT2 />;
      case "d":
        return <CauD_BT2 />;
      default:
        return <CauA_BT2 />;
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* TẦNG 1: CHỌN BÀI TẬP LỚN */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          borderBottom: "2px solid #ccc",
          paddingBottom: "10px",
        }}
      >
        <button
          onClick={() => handleSwitchMainTab(1)}
          style={{
            padding: "10px",
            background: mainTab === 1 ? "#2c3e50" : "#ecf0f1",
            color: mainTab === 1 ? "white" : "black",
            cursor: "pointer",
          }}
        >
          Bài tập 1: Basic
        </button>
        <button
          onClick={() => handleSwitchMainTab(2)}
          style={{
            padding: "10px",
            background: mainTab === 2 ? "#2c3e50" : "#ecf0f1",
            color: mainTab === 2 ? "white" : "black",
            cursor: "pointer",
          }}
        >
          Bài tập 2: Share State (A & B)
        </button>
      </div>

      {/* TẦNG 2: CHỌN CÂU */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
        <button
          onClick={() => setSubTab("a")}
          style={{
            background: subTab === "a" ? "#e74c3c" : "#bdc3c7",
            color: "white",
            padding: "8px 15px",
            border: "none",
          }}
        >
          Câu a
        </button>
        <button
          onClick={() => setSubTab("b")}
          style={{
            background: subTab === "b" ? "#e74c3c" : "#bdc3c7",
            color: "white",
            padding: "8px 15px",
            border: "none",
          }}
        >
          Câu b
        </button>
        <button
          onClick={() => setSubTab("c")}
          style={{
            background: subTab === "c" ? "#e74c3c" : "#bdc3c7",
            color: "white",
            padding: "8px 15px",
            border: "none",
          }}
        >
          Câu c
        </button>
        <button
          onClick={() => setSubTab("d")}
          style={{
            background: subTab === "d" ? "#e74c3c" : "#bdc3c7",
            color: "white",
            padding: "8px 15px",
            border: "none",
          }}
        >
          Câu d
        </button>
        {mainTab === 1 && (
          <button
            onClick={() => setSubTab("e")}
            style={{
              background: subTab === "e" ? "#e74c3c" : "#bdc3c7",
              color: "white",
              padding: "8px 15px",
              border: "none",
            }}
          >
            Câu e
          </button>
        )}
      </div>

      {/* HIỂN THỊ NỘI DUNG */}
      <div>{mainTab === 1 ? renderBT1() : renderBT2()}</div>
    </div>
  );
}

export default App;
