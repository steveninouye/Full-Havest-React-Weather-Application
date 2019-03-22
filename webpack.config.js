const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: path.resolve('/')
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname),
    port: 3000,
    compress: true,
    open: true,
    stats: 'errors-only',
    historyApiFallback: true
  }
};
