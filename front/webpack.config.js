const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ROOT = __dirname;
const PUBLIC = path.join(ROOT, 'public');
const SRC = path.join(ROOT, 'src');
const ASSETS = path.join(SRC, 'assets');

module.exports = {
  entry: {
    app: path.join(SRC, 'app.tsx'),
  },
  output: {
    path: PUBLIC,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(ASSETS, 'index.html'),
        to: PUBLIC,
      },
      {
        context: ASSETS,
        from: '**/*.jpg',
        to: PUBLIC,
      },
    ]),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  devServer: {
    contentBase: [ASSETS],
    port: 3000,
  },
};
