import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  useMemo,
  useCallback,
} from "react";

// --- 4. Reducer cho useReducer ---
const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return { visible: true };
    case "HIDE":
      return { visible: false };
    default:
      return state;
  }
};

const HooksDemo = () => {
  // --- 1. useState: Đếm số ---
  const [count, setCount] = useState(0);

  // --- 2. useEffect: Cập nhật tiêu đề trang khi count đổi ---
  useEffect(() => {
    document.title = `Bạn đã bấm ${count} lần`;
    console.log("useEffect chạy: Title đã đổi");
  }, [count]);

  // --- 3. useRef: Focus vào input ---
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };

  // --- 4. useReducer: Ẩn/Hiện văn bản ---
  const [state, dispatch] = useReducer(reducer, { visible: true });

  // --- 5. useMemo: Tính toán nặng (Bình phương) ---
  // Chỉ tính lại khi count thay đổi
  const squaredValue = useMemo(() => {
    console.log("useMemo đang tính toán...");
    return count * count;
  }, [count]);

  // --- 6. useCallback: Hàm không bị tạo lại ---
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // [] rỗng nghĩa là hàm này giữ nguyên suốt đời component

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h3>Demo 6 Hooks</h3>

      {/* Demo useState & useCallback */}
      <div style={{ marginBottom: "20px", borderBottom: "1px solid #eee" }}>
        <p>
          Số hiện tại: <b>{count}</b>
        </p>
        <p>
          Bình phương (useMemo): <b>{squaredValue}</b>
        </p>
        <button
          style={{ backgroundColor: "rgb(86, 222, 59)" }}
          onClick={handleIncrement}
        >
          Tăng (useState + useCallback)
        </button>
      </div>

      {/* Demo useRef */}
      <div style={{ marginBottom: "20px", borderBottom: "1px solid #eee" }}>
        <input ref={inputRef} placeholder="Nhập gì đó..." />
        <button
          style={{ backgroundColor: "rgb(195, 236, 16)" }}
          onClick={handleFocus}
        >
          Focus Input (useRef)
        </button>
      </div>

      {/* Demo useReducer */}
      <div>
        <button
          style={{ backgroundColor: "#678" }}
          onClick={() => dispatch({ type: "SHOW" })}
        >
          Hiện (Reducer)
        </button>
        <button
          style={{ backgroundColor: "#678" }}
          onClick={() => dispatch({ type: "HIDE" })}
        >
          Ẩn (Reducer)
        </button>
        {state.visible && <p style={{ color: "green" }}>hello</p>}
      </div>
    </div>
  );
};

export default HooksDemo;
