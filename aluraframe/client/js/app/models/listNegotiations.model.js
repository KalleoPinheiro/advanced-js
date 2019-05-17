'use strict';

class ListNegotiations {
  constructor() {
    this._negotiations = [];
    this._total = 0;
  }

  get total() {
    this._calcTotal();
    return this._total;
  }

  get negotiations() {
    return [...this._negotiations];
  }

  addNegotiation(negotiation) {
    this._negotiations = [...this._negotiations, negotiation];
  }

  removeNotifications() {
    this._negotiations = [];
  }

  _calcTotal() {
    this._total = this._negotiations.reduce((acum, next) => (acum += next.volume), 0);
  }
}
