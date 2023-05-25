import * as model from "./model.js";
import formView from "./formView.js";
import listView from "./listView.js";

const controlAddNewTask = function (taskStr) {
  model.addNewTask(taskStr);
  console.log(model.state);
};

const init = function () {
  formView.addHandlerOnSubmit(controlAddNewTask);
  listView.addHandlerMarkDone();
};
init();
