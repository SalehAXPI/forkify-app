import * as model from "./model";
import { state } from "./model";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";

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
    recipeView.render(state.recipe);
  } catch (e) {
    recipeView.renderError(e);
  }
};

const controlSearchResults = async function () {
  try {
    // 1) Get Search Query
    const query = searchView.getQuery();

    resultsView.renderSpinner();

    // 2) Load Search Results
    await model.loadSearchResult(query);

    // 3) Render Results
    // resultsView.render(state.search.results);
    resultsView.render(model.getSearchResultPage());
  } catch (e) {
    resultsView.renderError(e);
  }
};

// Publisher Subscriber
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
