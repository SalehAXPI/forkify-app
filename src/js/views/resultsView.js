import View from "./View";
import previewView from "./previewView";
import icons from "url:../../img/icons.svg";

class ResultsView extends View {
  _parentEl = document.querySelector(".results");
  _errorMessage = "No Recipe Found for your Query!";

  _genMarkup() {
    return this._data
      .map((results) => previewView.render(results, false))
      .join("");
  }
}

export default new ResultsView();
