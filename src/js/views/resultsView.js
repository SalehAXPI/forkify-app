import icons from "url:../../img/icons.svg";

import View from "./View";

class ResultsView extends View {
  _parentEl = document.querySelector(".results");
  _errorMessage = "No Recipe Found for your Query!";

  _genMarkup() {
    return this._data.map((ev) => this._genMarkupPre(ev)).join("");
  }

  _genMarkupPre(ev) {
    return `
        <li class='preview'>
          <a class='preview__link' href='#${ev.id}'>
            <figure class='preview__fig'>
              <img src='${ev.imageUrl}' alt='Test' />
            </figure>
            <div class='preview__data'>
              <h4 class='preview__title'>${ev.title}</h4>
              <p class='preview__publisher'>${ev.publisher}</p>
            </div>
          </a>
        </li>
    `;
  }
}

export default new ResultsView();
