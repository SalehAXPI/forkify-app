import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  /**
   * Render the received Obj to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. Recipe)
   * @param {boolean} [render = true] If false create markup string instead of Rendering To the DOM
   * @returns {undefined | string} A markup string is returned if render = false
   * @this {Object} View instance
   * @author Saleh Abbasi
   * todo Finish implementation
   */

  render(data, render = true) {
    if (!data || data.length === 0) return this.renderError();

    this._data = data;
    const markup = this._genMarkup();

    if (!render) return markup;

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
    </div>
    <p style="height: 50rem">&nbsp;</p>
`;

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
        <p style="height: 50rem">&nbsp;</p>
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
        <p>${this._message ? this._message : message}</p>
      </div>
    `;

    this._changeUi(markup);
  }

  _changeUi(markup) {
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}
