const path = require('path');

const OUTPUT_DIR = 'build';

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, OUTPUT_DIR),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx'],
  },
};
