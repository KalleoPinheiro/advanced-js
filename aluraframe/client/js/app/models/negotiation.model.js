'use strict';
class NegotiationModel {
  constructor(date, quantity, value) {
    this._date = new Date(date.getTime());
    this._quantity = Number.parseInt(quantity);
    this._value = Number.parseFloat(value);
    Object.freeze(this);
  }

  get date() {
    return new Date(this._date.getTime());
  }

  get quantity() {
    return this._quantity;
  }

  get value() {
    return this._value;
  }

  get volume() {
    return Number.parseInt(this._quantity) * Number.parseFloat(this._value);
  }
}
