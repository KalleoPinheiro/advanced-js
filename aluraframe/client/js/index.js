(doc => {
  'use strict';

  const fields = [doc.querySelector('#data'), doc.querySelector('#quantidade'), doc.querySelector('#valor')];
  const form = doc.querySelector('.form');
  const reset = doc.querySelector('#reset');

  const submitForm = event => {
    event.preventDefault();
    const tr = doc.createElement('tr');
    const table = doc.querySelector('table tbody');
    const vol = +doc.querySelector('#quantidade').value * +doc.querySelector('#valor').value;
    fields.forEach(field => {
      const td = doc.createElement('td');
      td.textContent = field.value;
      tr.appendChild(td);
      table.appendChild(tr);
    });
    const td = doc.createElement('td');
    td.textContent = vol;
    tr.appendChild(td);
    table.appendChild(tr);
    resetForm();
  };

  const resetForm = () => {
    fields.forEach(field => {
      field.value = '';
    });
  };

  form.addEventListener('submit', submitForm, false);
  reset.addEventListener('click', resetForm, false);
})(document);
