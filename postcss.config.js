/* eslint-disable */
const tailwindcss = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    postcssPresetEnv({
      stage: 0
    }),
    require("postcss-rtl"),
    require("autoprefixer")
  ]
};
