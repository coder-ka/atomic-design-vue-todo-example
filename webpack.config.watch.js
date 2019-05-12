const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(webpackConfig, {
  mode: "development",

  devtool: "cheap-module-eval-source-map",

  watch: true,

  output: {
    path: `${__dirname}/dist`,

    filename: "[name].[hash].js"
  },

  plugins: [
    new CleanWebpackPlugin(),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      inject: "body"
      // favicon: `${__dirname}/favicon.ico`
    })
  ]
});
