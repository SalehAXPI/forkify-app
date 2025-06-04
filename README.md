# Forkify - Recipe Application

Forkify is a web application that allows users to search for over 1,000,000 recipes, view recipe details, adjust serving sizes, bookmark their favorite recipes, and even upload their own custom recipes. This project is built with modern web technologies and focuses on providing a seamless user experience for discovering and managing recipes.

The core features of the application include:
- **Recipe Search:** Search a vast database of recipes.
- **Detailed View:** See ingredients, cooking instructions, and preparation time.
- **Adjust Servings:** Modify ingredient quantities based on the number of servings.
- **Bookmarking:** Save your favorite recipes for quick access.
- **Custom Recipe Uploads:** Add your own recipes to the application.

## Features

*   **Search for Recipes:** Easily search from a database of over one million recipes.
*   **View Recipe Details:** Access comprehensive recipe information including ingredients, step-by-step cooking instructions, preparation time, and serving sizes.
*   **Adjust Servings:** Dynamically update ingredient quantities based on the desired number of servings.
*   **Bookmark Recipes:** Save your favorite recipes for quick and easy access later. Bookmarked recipes are stored locally.
*   **Upload Custom Recipes:** Create and upload your own recipes to the application. These recipes are also stored and can be bookmarked.
*   **Responsive Design:** The application is designed to work seamlessly across various devices and screen sizes.
*   **Pagination:** Search results are paginated for easier navigation.

## Technologies Used

*   **HTML5:** For the basic structure and content of the application.
*   **SASS (SCSS):** For advanced styling and a more organized CSS structure.
*   **Vanilla JavaScript (ES6+):** For the application's logic and interactivity, following an MVC-like architecture (Model-View-Controller).
*   **Parcel:** As a module bundler for managing dependencies, and for development and production builds.
*   **core-js:** For polyfilling modern JavaScript features for older browser compatibility.
*   **fracty:** A library to convert decimal numbers to fractions (likely used for ingredient quantities).
*   **regenerator-runtime:** For enabling the use of async/await syntax with transpiled JavaScript.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download them from [https://nodejs.org/](https://nodejs.org/).

### Installation

1.  Clone the repo:
    ```bash
    git clone https://github.com/your_username/forkify.git
    ```
    (Note: You might want to update `your_username` or provide a generic URL if this is a template or example.)
2.  Navigate to the project directory:
    ```bash
    cd forkify
    ```
3.  Install NPM packages:
    ```bash
    npm install
    ```

### Running the Application

To start the development server and view the application in your browser:

```bash
npm start
```
This will typically open the application at `http://localhost:1234`.

### Building for Production

To create an optimized build for production:

```bash
npm run build
```
This will create a `dist` folder with the bundled and minified files.

## Project Structure

The project is organized as follows:

```
forkify/
├── .gitignore                 # Specifies intentionally untracked files that Git should ignore
├── README.md                  # This README file
├── index.html                 # Main HTML file for the application
├── package-lock.json          # Records exact versions of dependencies
├── package.json               # Lists project dependencies and scripts
├── forkify-architecture-recipe-loading.png # Diagram: Recipe loading architecture
├── forkify-flowchart-part-1.png            # Diagram: Application flowchart part 1
├── forkify-flowchart-part-2.png            # Diagram: Application flowchart part 2
├── forkify-flowchart-part-3.png            # Diagram: Application flowchart part 3
└── src/                       # Source files
    ├── img/                   # Image assets (logo, favicon, icons)
    ├── js/                    # JavaScript files
    │   ├── config.js          # Configuration variables (e.g., API URL, timeouts)
    │   ├── controller.js      # Application controller (handles user input and updates views)
    │   ├── helpers.js         # Utility functions
    │   ├── model.js           # Manages application state and data logic
    │   └── views/             # View components (responsible for rendering UI)
    │       ├── View.js        # Base View class
    │       ├── addRecipeView.js # View for the add recipe form
    │       ├── bookmarksView.js # View for displaying bookmarks
    │       ├── paginationView.js# View for search results pagination
    │       ├── previewView.js   # View for recipe previews (in search results/bookmarks)
    │       ├── recipeView.js    # View for displaying a single recipe
    │       ├── resultsView.js   # View for displaying search results
    │       └── searchView.js    # View for the search functionality
    └── sass/                  # SASS files for styling
        ├── _base.scss         # Basic styles, variables, mixins
        ├── _components.scss   # Styles for individual components
        ├── _header.scss       # Header styles
        ├── _preview.scss      # Styles for recipe previews
        ├── _recipe.scss       # Styles for the recipe display
        ├── _searchResults.scss# Styles for search results
        ├── _upload.scss       # Styles for the upload form
        └── main.scss          # Main SASS file, imports all others
```

## Flowcharts

The project includes several flowchart diagrams to visualize the application's architecture and logic:

*   **`forkify-architecture-recipe-loading.png`:** Illustrates the architecture and process of loading a recipe.
*   **`forkify-flowchart-part-1.png`:** Part 1 of the general application flow.
*   **`forkify-flowchart-part-2.png`:** Part 2 of the general application flow.
*   **`forkify-flowchart-part-3.png`:** Part 3 of the general application flow.

These diagrams can be found in the root directory of the project and are helpful for understanding the data flow and component interactions.

## License

This project is licensed under the ISC License. See the `LICENSE` file for more details (if one exists - typically, the ISC license text is short and can be included directly or referenced).

ISC License (ISC)
Copyright (c) 2023, Saleh Abbasi

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## Acknowledgements

*   This project was created by Saleh Abbasi.
*   The application is based on a project from the "Complete JavaScript Course" by Jonas Schmedtmann, adapted and modified by Saleh Abbasi.
*   Recipe data is sourced from the [Forkify API](https://forkify-api.herokuapp.com/v2). (Assuming this is the API used, based on common patterns for this project type. If not, this can be adjusted.)
