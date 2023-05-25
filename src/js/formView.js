class FormView {
  _parentElement = document.querySelector(".add-list__form");
  _inputField = document.querySelector(".add-list__input");

  addHandlerOnSubmit(handler) {
    this._parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handler(this._inputField.value);
      this._inputField.value = "";
    });
  }
}

export default new FormView();
