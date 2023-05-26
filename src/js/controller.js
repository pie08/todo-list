import * as model from "./model.js";
import formView from "./formView.js";
import listView from "./listView.js";

const controlAddNewTask = function (taskStr) {
  model.addNewTask(taskStr);
  listView.render(model.state.tasks);
};

const controlDeleteTask = function (itemIndex) {
  model.deleteTask(itemIndex);
  listView.render(model.state.tasks);
};

const init = function () {
  listView.render(model.state.tasks);
  formView.addHandlerOnSubmit(controlAddNewTask);
  listView.addHandlerMarkDone();
  listView.addHandlerDelete(controlDeleteTask);
};
init();
