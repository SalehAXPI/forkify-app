import View from "./View";
import icons from "url:../../img/icons.svg";


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
    if (this._window.classList.contains("hidden")) {
      this._window.classList.remove("hidden");
      this._changeUi(this._genMarkup())
    } else {
      this._window.classList.add("hidden");
    }
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

  _genMarkup() {
    return `
    <div class="upload__column">
      <h3 class="upload__heading">Recipe data</h3>
      <label>Title</label>
      <input name="title" required type="text" value="TEST" />
      <label>URL</label>
      <input name="sourceUrl" required type="text" value="TEST" />
      <label>Image URL</label>
      <input name="image" required type="text" value="TEST" />
      <label>Publisher</label>
      <input name="publisher" required type="text" value="TEST" />
      <label>Prep time</label>
      <input name="cookingTime" required type="number" value="23" />
      <label>Servings</label>
      <input name="servings" required type="number" value="23" />
    </div>

    <div class="upload__column">
      <h3 class="upload__heading">Ingredients</h3>
      <label>Ingredient 1</label>
      <input
        name="ingredient-1"
        placeholder="Format: 'Quantity,Unit,Description'"
        required
        type="text"
        value="0.5,kg,Rice"
      />
      <label>Ingredient 2</label>
      <input
        name="ingredient-2"
        placeholder="Format: 'Quantity,Unit,Description'"
        type="text"
        value="1,,Avocado"
      />
      <label>Ingredient 3</label>
      <input
        name="ingredient-3"
        placeholder="Format: 'Quantity,Unit,Description'"
        type="text"
        value=",,salt"
      />
      <label>Ingredient 4</label>
      <input
        name="ingredient-4"
        placeholder="Format: 'Quantity,Unit,Description'"
        type="text"
      />
      <label>Ingredient 5</label>
      <input
        name="ingredient-5"
        placeholder="Format: 'Quantity,Unit,Description'"
        type="text"
      />
      <label>Ingredient 6</label>
      <input
        name="ingredient-6"
        placeholder="Format: 'Quantity,Unit,Description'"
        type="text"
      />
    </div>

    <button class="btn upload__btn">
      <svg>
        <use href="${icons}#icon-upload-cloud"></use>
      </svg>
      <span>Upload</span>
    </button>
    `;
  }
}

export default new AddRecipeView();
