const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
  mode: 'production',
  entry: {
    'mihuiyi-hello': '/repository/mihuiyi-hello/index.js',
    'proxyTo': '/repository/proxyTo/index.js'
  },
  output: {
    filename: 'repository/[name]/index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'sleep',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [ 'repository/**/*.json' ]
    })
  ]
};
