const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const APP_DIR = path.join(__dirname, './src');
const PROD_DIR = path.join(__dirname, './build');

module.exports = {
  entry: [path.join(APP_DIR, 'index.js')],
  output: { path: PROD_DIR, filename: 'js/[name].[hash].js' },
  devServer: {
    contentBase: './src',
    host: 'localhost',
    port: process.env.PORT || 3000,
    historyApiFallback: true,
    // overlay: {
    //   errors: true,
    //   warnings: true,
    // },
    // open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|__test__|\.test)/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, './src/utils/'),
      Helpers: path.resolve(__dirname, './src/helpers/'),
      Pages: path.resolve(__dirname, './src/pages/'),
      Styles: path.resolve(__dirname, './src/styles/'),
      Components: path.resolve(__dirname, './src/components/'),
      Assets: path.resolve(__dirname, './src/assets/'),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(APP_DIR, './index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
};
