const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

/**
 * Webpack Configuration
 */
module.exports = {
  entry: {
    main: "./src/index.js"
  },

  resolve: {
    extensions: [".js", ".json", ".vue", ".scss"]
  },

  module: {
    rules: [
      // VUE
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: ["node_modules"]
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },

  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial"
    }
  },

  plugins: [new VueLoaderPlugin()]
};
