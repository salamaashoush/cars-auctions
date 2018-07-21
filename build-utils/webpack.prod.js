const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const glob = require("glob");
const commonPaths = require("./common-paths");

module.exports = {
  entry: {
    vendor: commonPaths.vendors,
    app: [commonPaths.styleEntryPoint, commonPaths.entryPath]
  },
  mode: "production",
  output: {
    filename: "js/[name].[hash].js",
    path: commonPaths.outPath,
    chunkFilename: "js/[name].[chunkhash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        },
        vendor: {
          chunks: "initial",
          name: "vendor",
          test: "vendor",
          enforce: true
        }
      }
    },
    runtimeChunk: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css"
    }),
    new InjectManifest(commonPaths.workBoxPaths),
    new CopyWebpackPlugin([`${commonPaths.staticFilesPath}/`], {})
  ],
  devtool: "source-map"
};
