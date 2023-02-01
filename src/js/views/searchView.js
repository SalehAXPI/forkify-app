class SearchView {
  _parentEl = document.querySelector(".search");
  _searchField = this._parentEl.querySelector(".search__field");

  getQuery() {
    const query = this._searchField.value.trim();
    this._clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }

  _clearInput() {
    this._searchField.value = "";
  }
}

export default new SearchView();
