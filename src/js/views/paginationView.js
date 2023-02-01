import View from "./View";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");
  _currentPage;

  addHandlerClick(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _genMarkup() {
    this._currentPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, There are other pages
    if (this._currentPage === 1 && numPages > 1) {
      return this._genMarkupButton("next");
    }

    // Last Page
    if (this._currentPage === numPages && numPages > 1) {
      return this._genMarkupButton("prev");
    }

    // Other page
    if (this._currentPage < numPages) {
      return `
      ${this._genMarkupButton("prev")}
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
        this._currentPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${this._currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `;
    }

    return `
    <button data-goto="${
      this._currentPage - 1
    }" class="btn--inline pagination__btn--prev">
       <svg class="search__icon">
         <use href="${icons}#icon-arrow-left"></use>
       </svg>
       <span>Page ${this._currentPage - 1}</span>
     </button>
    `;
  }
}

export default new PaginationView();
