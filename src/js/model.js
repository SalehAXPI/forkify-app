import { API_URL, KEY, RES_PER_PAGE } from "./config";
import { AJAX } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

const createRecipeObj = function (data) {
  const { recipe } = data.data;
  return {
    cookingTime: recipe.cooking_time,
    id: recipe.id,
    imageUrl: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    sourceUrl: recipe.source_url,
    title: recipe.title,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  // Try catch is not used to throw the error to the Controller try catch block
  const data = await AJAX(`${API_URL}/${id}?key=${KEY}`);
  state.recipe = createRecipeObj(data);

  state.search.page = 1;
  state.recipe.bookmarked = state.bookmarks.some(
    (bookmark) => bookmark.id === id
  );
};

export const loadSearchResult = async function (query) {
  // Try catch is not used to throw the error to the Controller try catch block
  state.search.query = query;
  const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

  state.search.results = data.data.recipes.map((rec) => {
    return {
      id: rec.id,
      imageUrl: rec.image_url,
      publisher: rec.publisher,
      title: rec.title,
      ...(rec.key && { key: rec.key }),
    };
  });
};

export const getSearchResultPage = function (page = 1) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach((ing) => {
    // newQt = oldQt * newServings / oldServings
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = +newServings;
};

const persistBookmarks = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

export const removeBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex((el) => el.id === id);
  state.bookmarks.splice(index, 1);

  // unMark current recipe
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem("bookmarks");
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();

export const uploadRecipe = async function (newRecipe) {
  const ingredients = Object.entries(newRecipe)
    .filter(
      (entry) => entry[0].startsWith("ingredient") && entry[1].trim() !== ""
    )
    .map((ing) => {
      // const ingArr = ing[1].replaceAll(" ", "").split(",");
      const ingArr = ing[1].split(",").map((el) => el.trim());

      if (ingArr.length !== 3) throw new Error();

      const [quantity, unit, description] = ingArr;
      return { quantity: quantity ? +quantity : null, unit, description };
    });

  const recipe = {
    title: newRecipe.title,
    source_url: newRecipe.sourceUrl,
    image_url: newRecipe.image,
    publisher: newRecipe.publisher,
    cooking_time: +newRecipe.cookingTime,
    servings: +newRecipe.servings,
    ingredients,
  };
  const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
  state.recipe = createRecipeObj(data);
  addBookmark(state.recipe);
  console.log(data);
};
