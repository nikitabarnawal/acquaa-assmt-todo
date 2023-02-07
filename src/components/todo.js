import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeToDo, deleteToDo, moveToTop } from "../redux/action";
import PropTypes from "prop-types";
import TodoForm from "./todoForm";

const Todo = ({ todo, index }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const handleIsEdit = () => setIsEdit(false);

  const toggleTodo = () => dispatch(completeToDo(todo.id));

  return (
    <>
      {!isEdit ? (
        <div className="todo-content">
          <div className="todo-text">
            <input
              type="checkbox"
              value={todo.done}
              onClick={toggleTodo}
            ></input>
            <div className={`todo ${todo.done ? "strikethrough" : ""}`}>
              {todo.task}
            </div>
          </div>
          <div className="todo-action">
            {index !== 0 && (
              <button
                type="button"
                className="btn-edit"
                onClick={() => dispatch(moveToTop(todo.id))}
              >
                PIN
              </button>
            )}
            <button
              type="button"
              className="btn-edit"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn-delete"
              onClick={() => dispatch(deleteToDo(todo.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <TodoForm
          todoTask={todo.task}
          todoId={todo.id}
          handleIsEdit={handleIsEdit}
          test={todo}
        />
      )}
    </>
  );
};

Todo.propTypes = {
  todo: PropTypes.object,
};

export default Todo;
