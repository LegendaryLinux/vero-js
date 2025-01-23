const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/demo/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|es6)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(s[a|c]ss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ]
  },
  output: {
    path: path.resolve(__dirname)+'/public/js',
    filename: "[name].js",
  }
};
