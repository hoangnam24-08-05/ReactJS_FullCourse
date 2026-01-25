import React from "react";
import { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <div className="todo-input-group">
      <input
        type="text"
        className="todo-input"
        placeholder="Nhập công việc mới"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button className="btn-add" onClick={handleSubmit}>
        Thêm
      </button>
    </div>
  );
};

export default TodoInput;
