'use strict';
class MessageModel {
  constructor(text = '') {
    this._text = text;
  }

  get message() {
    return this._text;
  }

  set message(message) {
    this._text = message;
  }
}
