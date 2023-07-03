import React from "react";
import TodoItem from "./TodoItem";
import "./Todos.css";
import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todoSlice";

function Todos() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="container_wrapper">
      <div className="todo_container">
        {todoList.map((todo) => (
          <TodoItem todo={todo.item} done={todo.done} id={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default Todos;
