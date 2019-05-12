const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(webpackConfig, {
  mode: "production",

  output: {
    path: `${__dirname}/dist`,
    filename: "[name].[hash].js"
  },

  devtool: "source-map",

  plugins: [
    new CleanWebpackPlugin(),

    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),

    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      inject: "body",
      // favicon: `${__dirname}/favicon.ico`,
      minify: {},
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      chunksSortMode: "dependency"
    }),

    new webpack.HashedModuleIdsPlugin()
  ]
});
