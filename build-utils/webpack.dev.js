const webpack = require("webpack");
const path = require("path");
const convert = require("koa-connect");
const history = require("connect-history-api-fallback");
const proxy = require("http-proxy-middleware");
const webpackServeWaitpage = require("webpack-serve-waitpage");
const commonPaths = require("./common-paths");

module.exports = {
  entry: [commonPaths.styleEntryPoint, commonPaths.entryPath],
  mode: "development",
  output: {
    filename: "js/[name].js",
    path: commonPaths.outPath,
    chunkFilename: "js/[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  serve: {
    content: commonPaths.staticFilesPath,
    add: (app, middleware, options) => {
      app.use(convert(proxy("/api", { target: process.env.API_URL })));
      app.use(convert(history()));
      app.use(webpackServeWaitpage(options));
    }
  }
};
