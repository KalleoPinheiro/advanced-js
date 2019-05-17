'use strict';
class NegotiationView extends BaseView {
  template(list) {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            ${list.negotiations
              .map(
                negotiation => `
                      <tr>
                          <td>${DateHelper.transformToText(negotiation.date)}</td>
                          <td>${negotiation.quantity}</td>
                          <td>${negotiation.value}</td>
                          <td>${negotiation.volume}</td>
                      </tr>  
                  `
              )
              .join('')}
            </tbody>

            <tfoot>
                <td colspan="3"></td>
                <td>${list.total}</td>
            </tfoot>
        </table>
    `;
  }
}
