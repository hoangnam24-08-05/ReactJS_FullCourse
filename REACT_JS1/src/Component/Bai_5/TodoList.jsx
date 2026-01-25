import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888" }}>
          Không có công việc nào
        </p>
      ) : (
        todos.map((item) => (
          <TodoItem key={item.id} todo={item} onDelete={onDelete} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
