import React from "react";

const TodoItem = ({ todo, onToggle, onDelete, index }) => {
  console.log(`Render item: ${todo.id}`);
  return (
    <div className={`todo-item ${todo.completed ? "done" : ""}`}>
      <span onClick={() => onToggle(todo.id)}>
        <b>{index + 1}. </b>
        {todo.text}
      </span>
      <button className="btn-del" onClick={() => onDelete(todo.id)}>
        Xóa
      </button>
    </div>
  );
};
export default TodoItem;
