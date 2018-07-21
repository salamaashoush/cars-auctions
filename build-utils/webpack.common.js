const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const commonPaths = require("./common-paths");

module.exports = {
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/,
        options: {
          emitWarning: process.env.NODE_ENV !== "production"
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ["node_modules", commonPaths.srcRoot],
    extensions: [".js", ".json", ".jsx"],
    alias: commonPaths.resolveAlias
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: commonPaths.root
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
      env: process.env.NODE_ENV
    }),
    new Dotenv({
      systemvars: true,
      silent: true,
      path: commonPaths.envFile
    })
  ]
};
