let id = 4;
const InitialTasks = [
  {
    id: 1,
    task: "Wake up at 6am",
    done: false,
  },
  {
    id: 2,
    task: "Take bathe and hit the gym",
    done: false,
  },
  {
    id: 3,
    task: "Go to Library and study for an hour",
    done: false,
  },
  {
    id: 4,
    task: "Call mom",
    done: false,
  },
];

const initialState = {
  tasks: InitialTasks,
};

export const TODO_ACTIONS = (state = initialState, action) => {
  const { task, taskId } = action;

  switch (action.type) {
    case "ADD_TODO":
      const newTask = {
        id: ++id,
        task,
      };
      return {
        tasks: [newTask, ...state.tasks],
      };
    case "DELETE_TODO":
      const result = state.tasks.filter((task) => task.id !== taskId);
      return {
        tasks: [...result],
      };
    case "EDIT_TODO":
      let editIndex = state.tasks.findIndex((obj) => obj.id === taskId);
      state.tasks[editIndex].task = task;
      return {
        tasks: [...state.tasks],
      };
    case "COMPLETE_TODO":
      let doneIndex = state.tasks.findIndex((obj) => obj.id === taskId);
      state.tasks[doneIndex].done = !state.tasks[doneIndex].done;
      return {
        tasks: [...state.tasks],
      };
    case "MOVE_TOP": {
      let newIndex = state.tasks.findIndex((obj) => obj.id === taskId);
      const task = state.tasks[newIndex];
      state.tasks.splice(newIndex, 1);
      state.tasks.unshift(task);
      return {
        tasks: [...state.tasks],
      };
    }
    default:
      return {
        tasks: [...state.tasks],
      };
  }
};
