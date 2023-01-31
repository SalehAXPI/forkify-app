class SearchView {
  #parentEl = document.querySelector(".search");
  #searchField = this.#parentEl.querySelector(".search__field");

  getQuery() {
    const query = this.#searchField.value;
    this.#clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }

  #clearInput() {
    this.#searchField.value = "";
  }
}

export default new SearchView();
