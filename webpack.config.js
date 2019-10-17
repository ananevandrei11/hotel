const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const config = {
  entry: {
    app: './src/index.js',
    cards: './src/components/cards/cards.js'
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
      filename: 'index.html',
      template: "./src/index.pug"
    }),
    new HtmlWebpackPlugin({
      filename: 'cards.html',
      template: './src/components/cards/cards.pug'
    }),
    new MiniCssExtractPlugin({
     filename: 'style.css'
    }),
    new CleanWebpackPlugin (),
    
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
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
              { loader: 'postcss-loader',
              options: { sourceMap: true, config: { path: "./src/postcss.config.js"}}
            },
              'less-loader' // compiles Less to CSS
              ],
      },
      {
        test: /\.css$/,
        use: [ 'less-loader',
              MiniCssExtractPlugin.loader,
              { loader: 'css-loader',
              options: { sourceMap: true }
            },
              { loader: 'postcss-loader',
              options: { sourceMap: true, config: { path: "./src/postcss.config.js"}}
            }
              ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './images',
              useRelativePath: true
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70
              }
            },
          
      }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [ {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './fonts',
            useRelativePath: true
          },
        }
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