import React from "react";
import "../Component/Bai_4/Todo.css";
import TodoInput from "../Component/Bai_4/TodoInput";
import TodoItem from "../Component/Bai_4/TodoItem";
import { useState, useCallback } from "react";

const Bai4 = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Học React", completed: false },
    { id: 2, text: "Học JavaScript", completed: true },
    { id: 3, text: "Học HTML/CSS", completed: false },
  ]);

  const handleAdd = useCallback((text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  return (
    <div style={{ padding: "50px", background: "#f0f2f5", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center" }}>Bài 4</h2>
      <div className="todo-box">
        <TodoInput onAdd={handleAdd} />
        <div className="list">
          {todos.map((item, index) => (
            <TodoItem
              key={item.id}
              todo={item}
              index={index}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bai4;
