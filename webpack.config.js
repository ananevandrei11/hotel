const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const config = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].main.js",
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.pug"
    }),
    new MiniCssExtractPlugin({
     filename: 'style.css'
    }),
    new CleanWebpackPlugin (),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  module: {
    rules: [{
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.less$/,
        use: [ MiniCssExtractPlugin.loader,
              'css-loader',
              'less-loader' // compiles Less to CSS
              ],
      },
    ]
  }
};
module.exports = (env, argv) => {
  if (argv.mode === 'development') {}
  if (argv.mode === 'production') {}
  return config;
}