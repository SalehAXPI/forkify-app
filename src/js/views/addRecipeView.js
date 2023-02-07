import View from "./View";

class AddRecipeView extends View {
  _parentEl = document.querySelector(".upload");
  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");
  _errorMessage = "Wrong Ingredient Format! Please use the correct format!";
  _message = "Recipe was successfully uploaded!";

  constructor() {
    super();
    this._addHandlerOpenWindow();
    this._addHandlerCloseWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerOpenWindow() {
    // Use Arrow Functions to bind 'this' keyword to class not this._btnOpen
    // this._btnOpen.addEventListener("click", () => {
    //   this._overlay.classList.toggle("hidden");
    //   this._window.classList.toggle("hidden");
    // });

    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  _addHandlerCloseWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentEl.addEventListener("submit", function (ev) {
      ev.preventDefault();
      const dataArr = new FormData(this);
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _genMarkup() {}
}

export default new AddRecipeView();
