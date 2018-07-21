/* eslint-disable */
const commonConfig = require("./build-utils/webpack.common");
const webpackMerge = require("webpack-merge");
require("dotenv").config();

const envs = {
  development: "dev",
  production: "prod"
};
const env = envs[process.env.NODE_ENV || "development"];
const envConfig = require(`./build-utils/webpack.${env}.js`);
module.exports = webpackMerge(commonConfig, envConfig);
