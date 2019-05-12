const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(webpackConfig, {
  mode: "development",

  devtool: "cheap-module-eval-source-map",

  output: {
    filename: "[name].js"
  },

  devServer: {
    hot: true
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      inject: "body"
      // favicon: `${__dirname}/favicon.ico`
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
