export const state = {
  tasks: [
    "go to the store",
    "get milk",
    "if they have eggs",
    "get a dozen",
    "🍞🍞🍞🍞🍞🍞🍞🍞🍞🍞🍞🍞",
  ],
};

export const addNewTask = function (text) {
  state.tasks.push(text);
};

export const deleteTask = function (index) {
  state.tasks.splice(index, 1);
};
