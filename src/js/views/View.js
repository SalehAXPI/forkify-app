import icons from "url:../../img/icons.svg";
import { Fraction } from "fractional";

export default class View {
  _data;

  render(data) {
    if (!data || data.length === 0) throw new Error();

    this._data = data;
    const markup = this._genMarkup();
    this._changeUi(markup);
  }

  renderSpinner() {
    const markup = `
    <div class='spinner'>
        <svg>
          <use href='${icons}#icon-loader'></use>
       </svg>
    </div>`;

    this._changeUi(markup);
  }

  renderError() {
    const markup = `
    <div class='error'>
        <div>
          <svg>
            <use href='${icons}#icon-alert-triangle'></use>
          </svg>
        </div>
        <p>${this._errorMessage}</p>
      </div>
    `;

    this._changeUi(markup);
  }

  renderMessage(message) {
    const markup = `
    <div class='message'>
        <div>
          <svg>
            <use href='${icons}#icon-smile'></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;

    this._changeUi(markup);
  }

  _changeUi(markup) {
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}