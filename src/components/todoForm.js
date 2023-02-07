import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo, editToDo } from "../redux/action";

const TodoForm = ({ todoTask, todoId, test, handleIsEdit }) => {
  console.log(6, test);
  const [task, setTask] = useState(todoTask || "");
  const dispatch = useDispatch();

  const handleTodo = (e) => {
    e.preventDefault();
    if (!task || task === "") {
      alert("Please enter your todo");
      return;
    }
    if (todoTask) {
      dispatch(editToDo(task, todoId));
      handleIsEdit && handleIsEdit();
    } else {
      dispatch(addToDo(task));
    }
    setTask("");
  };

  const handleTask = (e) => setTask(e.target.value);

  return (
    <form onSubmit={handleTodo}>
      <input
        type="text"
        placeholder="addToDo"
        value={task}
        onChange={handleTask}
      />
      <button className="btn-form" type="submit">
        {!todoTask ? "Add" : "Update"}
      </button>
    </form>
  );
};

export default TodoForm;
