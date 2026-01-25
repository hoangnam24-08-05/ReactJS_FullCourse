import React from "react";
import "../Component/Bai_5/Todo.css";
import TodoItem from "../Component/Bai_5/TodoItem";
import TodoList from "../Component/Bai_5/TodoList";
import TodoInput from "../Component/Bai_5/TodoInput";
import { useState } from "react";

const Bai5 = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Học ReactJS" },
    { id: 2, text: "Làm bài tập" },
  ]);

  const handleAddTodo = (newText) => {
    const newTodo = {
      id: Date.now(),
      text: newText,
    };

    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (idToDelete) => {
    const newTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(newTodos);
  };
  return (
    <div style={{ padding: "50px", background: "#f0f2f5", minHeight: "80vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Bài 5: Todo App
      </h2>

      <div className="todo-container">
        {}
        <TodoInput onAdd={handleAddTodo} />

        {}
        <TodoList todos={todos} onDelete={handleDeleteTodo} />
      </div>
    </div>
  );
};

export default Bai5;
