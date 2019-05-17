'use strict';

class DateHelper {
  constructor() {
    throw new Error('Classe não pode ser instanciada!');
  }

  static transformToDate(date) {
    try {
      if (!/^\d{4}-\d{2}-\d{2}$/g.test(date)) throw new Error('Formato inválido!');
      return new Date(...date.split('-').map((date, index) => date - (index % 2)));
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  static transformToText(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}
