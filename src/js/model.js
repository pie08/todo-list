export const state = {
  tasks: [],
};

export const addNewTask = function (text) {
  state.tasks.push(text);
};
