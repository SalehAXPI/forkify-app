import View from "./View";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");
  _numPages;

  addHandlerClick(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _genMarkup() {
    this._numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, There are other pages
    if (this._data.page === 1 && this._numPages > 1) {
      return `
      ${this._genMarkupCur()}
      ${this._genMarkupButton("next")}
      `;
    }

    // Last Page
    if (this._data.page === this._numPages && this._numPages > 1) {
      return `
      ${this._genMarkupButton("prev")}
      ${this._genMarkupCur()}
      `;
    }

    // Other page
    if (this._data.page < this._numPages) {
      return `
      ${this._genMarkupButton("prev")}
      ${this._genMarkupCur()}
      ${this._genMarkupButton("next")}
      `;
    }

    // Page 1, There are No other pages
    return "";
  }

  _genMarkupButton(dir) {
    if (dir === "next") {
      return `
      <button data-goto="${
        this._data.page + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${this._data.page + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `;
    }

    return `
    <button data-goto="${
      this._data.page - 1
    }" class="btn--inline pagination__btn--prev">
       <svg class="search__icon">
         <use href="${icons}#icon-arrow-left"></use>
       </svg>
       <span>Page ${this._data.page - 1}</span>
     </button>
    `;
  }

  _genMarkupCur() {
    return `
    <button class="btn--small">
      ${this._data.page}/${this._numPages}
    </button>
    `;
  }
}

export default new PaginationView();
