import React from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";
import { useSelector } from "react-redux";

const ToDoWrapper = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="todoWrapper">
      <h1>Todo App</h1>
      <div className="todoContainer">
        <TodoForm />
        <div className="todoList">
          {tasks.map((task, index) => (
            <Todo key={task.id} todo={task} done={task.done} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoWrapper;
