const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    Data: './src/Data.js'
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
    libraryTarget: 'umd',
    library: '@veroproducts/data',
    umdNamedDefine: true,
  }
};
