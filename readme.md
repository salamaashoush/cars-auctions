## Features

1.  Internatiolization support en/ar with routing `/en` for english `/ar` for arabic
2.  Code Spliting and moduler code:
    - Ui Components --> using `react-loadable` package
    - Redux Reducers --> using custome async reducer injector `src/store/makeRootReducer.js`
3.  Rtl style support using `postcss-rtl`
4.  CSS utils first framework `tailwindecss`
5.  UI routing with `react-router`
6.  React/JS/CSS best practices
7.  Full responsive layout

## Why this approach:

- designed for scaling the app easly
- well structured

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    images/
    index.html
    manifest.json
  src/
    api/ --> Api end point for each app env
      development.js
      index.js
      tdev.js --> "test" env file renamed to avoid jest conflicts
    assets/
      logo.svg
    containers/
      App.js --> main app conatiner component
      createRoutes.js --> helper to create the routes
    layout/
      default/ --> main layout for the app used to provide the app theme
    routes/ --> conatins all app routes/pages
      Cars/ --> cars page
        components/ --> cars route components
        containers/
          CarsContainer.js --> the container components for the cars page it provide redux state and action to other componets
        modules/ --> i am injecting the redux reducers for each route indivdualy if needed
          actions.js --> actions for cars page
          constants.js
          intitialState.js
          reducers.js
          selectors.js --> see [https://github.com/reactjs/reselect](https://github.com/reactjs/reselect)
        index.js --> contains the code for async load component and codespliting also injects the reducer
    shared/ --> contains the shared components
    store/ --> redux configurations
      makeRootReducer.js --> helper to make the root reducer for redux and the injectReducer function
      index.js --> redux setup
    styles/ --> global css code styles
    utils/
      httpClient.js --> axois instance configured with for the app
      index.js --> contains all utils used in the app
    constatnts.js --> contains all constants used in the app
    registerServiceWorker.js --> create-react-app service worker code
    index.js --> the entry point for the app
    setupTests.js --> jest setup code
```

For the project to build, **these files must exist with exact filenames**:

- `src/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm dev`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the uint test runner in the interactive watch mode.<br>

I wrote simple unit test for dump components

### `npm run e2e`

Launches cypress e2e test runner in gui

please start the server before you run it

### `npm run prod`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### deployed at [http://cars-auction.surge.sh/](http://cars-auction.surge.sh/)
