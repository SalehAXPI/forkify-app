import * as model from "./model";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

const controlRecipes = async function () {
  try {
    const id = recipeView.getHash();
    if (!id) return;

    recipeView.renderSpinner();

    // 1) Loading Recipe
    await model.loadRecipe(id);

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (e) {
    recipeView.renderError(e);
  }
};

const controlSearchResults = async function () {
  try {
    // 1) Get Search Query
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.renderSpinner();

    // 2) Load Search Results
    await model.loadSearchResult(query);

    // 3) Render Results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (e) {
    resultsView.renderError(e);
  }
};

const controlPagination = function (goToPage) {
  // 3) Render NEW Results
  resultsView.render(model.getSearchResultPage(goToPage));

  // 4) Render NEW pagination buttons
  paginationView.render(model.state.search);
};

// Publisher Subscriber
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
