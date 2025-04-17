const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { devtools } = require('zustand/middleware');
module.exports = {
    mode: "development",
  entry: './src/js/index.js',
  devtool : 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  devServer: {
    static: './docs',
  },
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
  }
};