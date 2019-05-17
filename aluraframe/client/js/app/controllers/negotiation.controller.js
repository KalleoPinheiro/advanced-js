'use strict';

class NegotiationController {
  constructor() {
    const $ = document.querySelector.bind(document);
    this._inputDate = $('[data-js="date"]');
    this._inputQuantity = $('[data-js="quantity"]');
    this._inputValue = $('[data-js="value"]');
    this._negotiationsView = new NegotiationView($('[data-js="table"]'));
    this._listNegotiations = new BindHelper(new ListNegotiations(), this._negotiationsView, [
      'addNegotiation',
      'removeNotifications'
    ]);
    this._messageView = new MessageView($('[data-js="message"]'));
    this._message = new BindHelper(new MessageModel(), this._messageView, ['message']);
  }

  add(event) {
    event.preventDefault();
    this._listNegotiations.addNegotiation(this._createNegotiation());
    this._message.message = 'Adicionada com sucesso!';
    this._clearForm();
  }

  clearList() {
    this._listNegotiations.removeNotifications();
    this._message.message = 'Lista apagada!';
  }

  _createNegotiation() {
    return new NegotiationModel(
      DateHelper.transformToDate(this._inputDate.value),
      this._inputQuantity.value,
      this._inputValue.value
    );
  }

  _clearForm() {
    this._inputDate.value = '';
    this._inputQuantity.value = 1;
    this._inputValue.value = '0.0';
    this._inputDate.focus();
  }
}
