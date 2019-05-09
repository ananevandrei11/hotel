const HtmlWebpackPlugin = require ('html-webpack-plugin');
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
],
module: {
  rules: [
    { 
      test: /\.pug$/,
      use: ["pug-loader"]
    },
  ]
}
};
module.exports = (env, argv) => {
  if (argv.mode === 'development') {}
   if (argv.mode === 'production') {}
  return config;
  }