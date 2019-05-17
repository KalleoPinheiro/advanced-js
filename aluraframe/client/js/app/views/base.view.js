'use strict';
class BaseView {
  constructor(element) {
    this._element = element;
  }

  template() {
    throw new Error('Necessária implementação do método!');
  }

  update(content, type) {
    this._element.innerHTML = this.template(content, type);
  }
}
