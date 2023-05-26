class ListView {
  _parentElement = document.querySelector(".list");
  _btnMarkDone = document.querySelectorAll(".list__btn-done");
  _btnDeleteTask = document.querySelectorAll(".list__btn-delete");

  constructor() {
    this._markDone;
    this._deleteItem;
    this._generateMarkup;
    this._clear;
  }

  // data is array of tasks
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    console.log(markup);
    this._clear();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
    // document.querySelectorAll(".list__item").forEach((el) => {
    //   el.classList.remove("fall-from-top");
    // });
  }

  _generateMarkup() {
    if (this._data.length === -0)
      return `
      <li class="no-tasks fade-in">
        <p><span>:(</span> Looks like you don't have any tasks yet!</p>
      </li>`;

    return this._data
      .map(
        (text, i) => `
        <li data-index="${i}" class="list__item ${
          i === this._data.length - 1 ? "fall-from-top" : ""
        }">
          <button data="done" class="list__btn-done"></button>
          <p class="list__text">
            ${text}
          </p>
          <button data="delete" class="list__btn-delete">X</button>
        </li>
    `
      )
      .join("");
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  addHandlerMarkDone() {
    this._parentElement.addEventListener("click", (e) => {
      // e.preventDefault();
      if (e.target.closest(".list__btn-delete") !== null) return;

      const item = e.target.closest(".list__item");
      const itemIndex = item.dataset.index;
      if (!item) return;
      this._markDone(itemIndex);
    });
  }

  addHandlerDelete(handler) {
    this._parentElement.addEventListener("click", (e) => {
      // e.preventDefault();
      const item = e.target.closest(".list__btn-delete");
      if (!item) return;
      const itemEl = item.closest(".list__item");
      const itemIndex = itemEl.dataset.index;
      itemEl.classList.add("move-left");
      setTimeout(() => {
        handler(itemIndex);
      }, 500);
    });
  }

  _markDone(itemIndex) {
    const item = this._parentElement.querySelector(
      `[data-index='${itemIndex}']`
    );
    item.classList.toggle("marker--done");
  }
}

export default new ListView();
