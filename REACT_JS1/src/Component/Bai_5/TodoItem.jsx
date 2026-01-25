import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button className="btn-delete" onClick={() => onDelete(todo.id)}>
        Xóa
      </button>
    </li>
  );
};

export default TodoItem;
