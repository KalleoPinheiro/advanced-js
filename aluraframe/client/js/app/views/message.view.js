'use strict';
class MessageView extends BaseView {
  template(message) {
    return message.text ? `<p class="alert alert-info">${message.text}</p>` : '<p></p>';
  }
}
