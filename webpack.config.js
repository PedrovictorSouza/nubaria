const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/aliado/game.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: "./dist"
  }
};
