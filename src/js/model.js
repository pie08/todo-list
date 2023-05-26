export const state = {
  tasks: [],
};

export const addNewTask = function (text) {
  state.tasks.push(text);
};

export const deleteTask = function (index) {
  state.tasks.splice(index, 1);
};
