const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    demo: './demo/Demo.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|es6)$/,
        loader: 'babel-loader',
      },
    ]
  },
  output: {
    path: path.resolve(__dirname)+'/public/js',
    filename: "[name].js",
  }
};
