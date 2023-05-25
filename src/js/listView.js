class ListView {
  _parentElement = document.querySelector(".list");
  _btnMarkDone = document.querySelectorAll(".list__btn-done");
  _btnDeleteTask = document.querySelectorAll(".list__btn-delete");

  constructor() {
    this._markDone;
    this._deleteItem;
  }

  addHandlerMarkDone() {
    this._parentElement.addEventListener("click", (e) => {
      // e.preventDefault();
      const btn = e.target.closest(".list__btn-done");
      const itemIndex = e.target.closest(".list__item").dataset.index;
      if (!btn) return;
      this._markDone(itemIndex);
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
