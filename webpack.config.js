const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval-cheap-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      assets: path.resolve(__dirname, 'src', 'assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /npde_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new miniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};
