const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/js/app.js', './src/js/color.js']
  },
  output: {
    path: __dirname,
    filename: './dist/js/app.js'
  },
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist')
    contentBase: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: { importLoaders: 1 }
          }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './dist/css/style.css',
      allChunks: true
      // disable: process.env.NODE_ENV === "development"
    })
  ]
};
