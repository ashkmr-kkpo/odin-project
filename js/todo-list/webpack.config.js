const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    plugins: [new HtmlWebpackPlugin({
      title: "Custom",
      template: "./src/index.html"
    })],
    devServer: {
      static: './dist',
      watchFiles: 'src/*.html'
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    }
  };