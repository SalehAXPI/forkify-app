import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  render(data) {
    if (!data || data.length === 0) throw new Error();

    this._data = data;
    const markup = this._genMarkup();
    this._changeUi(markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._genMarkup();

    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElement = Array.from(newDom.querySelectorAll("*"));
    const currentEl = Array.from(this._parentEl.querySelectorAll("*"));

    newElement.forEach((newEl, i) => {
      const curEl = currentEl[i];

      // Update changes TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      )
        curEl.textContent = newEl.textContent;

      // Update changes ATTRIBUTE
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach((attr) =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
       </svg>
    </div>`;

    this._changeUi(markup);
  }

  renderError() {
    const markup = `
    <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${this._errorMessage}</p>
      </div>
    `;

    this._changeUi(markup);
  }

  renderMessage(message) {
    const markup = `
    <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
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
