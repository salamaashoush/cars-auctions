const env = process.env.NODE_ENV;
/*eslint-disable*/
export default (() => {
  if (env === "test") {
    return require("./tdev.js").default;
  }
  return require(`./${env}.js`).default;
})();
