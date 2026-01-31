import React, { memo } from "react";
import { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState("");
  console.log("Render Input");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };
  return (
    <div className="input-group">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="nhập công việc"
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button onClick={handleSubmit} style={{ padding: "0 20px" }}>
        Thêm
      </button>
    </div>
  );
};

export default memo(TodoInput);
