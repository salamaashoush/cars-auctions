const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  outPath: path.resolve(__dirname, "../", "dist"),
  staticFilesPath: path.resolve(__dirname, "../", "public"),
  entryPath: path.resolve(__dirname, "../", "src/index.jsx"),
  templatePath: path.resolve(__dirname, "../src/", "index.html"),
  srcRoot: path.resolve(__dirname, "../", "src"),
  envFile: path.resolve(__dirname, "../", ".env"),
  workBoxPaths: {
    swDest: path.resolve(__dirname, "../", "dist/service-worker.js"),
    swSrc: path.resolve(__dirname, "../", "src/swSrc.js")
  },
  styleEntryPoint: path.resolve(__dirname, "../", "src/styles/app.scss"),
  resolveAlias: {
    Store: path.resolve(__dirname, "../", "src/store/"),
    Api: path.resolve(__dirname, "../", "src/api/"),
    Utils: path.resolve(__dirname, "../", "src/utils/"),
    Routes: path.resolve(__dirname, "../", "src/routes/"),
    Shared: path.resolve(__dirname, "../", "src/shared/")
  },
  vendors: [
    "react",
    "redux",
    "react-dom",
    "prop-types",
    "react-redux",
    "redux-thunk",
    "axios"
  ]
};
