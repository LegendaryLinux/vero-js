const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    Data: './src/index.js'
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
    path: path.resolve(__dirname),
    filename: "dist/[name].js",
    libraryTarget: 'commonjs2',
  }
};
