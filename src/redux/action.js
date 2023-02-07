export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  EDIT_TODO: "EDIT_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  MOVE_TOP: "MOVE_TOP",
};

export const addToDo = (task) => ({
  type: ACTIONS.ADD_TODO,
  task,
});

export const deleteToDo = (id) => ({
  type: ACTIONS.DELETE_TODO,
  taskId: id,
});

export const editToDo = (task, id) => ({
  type: ACTIONS.EDIT_TODO,
  task,
  taskId: id,
});

export const completeToDo = (id) => ({
  type: ACTIONS.COMPLETE_TODO,
  taskId: id,
});

export const moveToTop = (id) => ({
  type: ACTIONS.MOVE_TOP,
  taskId: id,
});
