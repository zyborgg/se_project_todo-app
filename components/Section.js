class Section {
  constructor({ items, renderer, containerSelctor }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelctor);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    // add element to the container
  }
}

export default Section;
