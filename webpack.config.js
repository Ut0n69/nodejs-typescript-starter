const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  module: {
    rules: [{
        enforce: 'pre',
        loader: 'tslint-loader',
        test: /\.ts$/,
        exclude: [
          /node_modules/
        ],
        options: {
          emitErrors: true
        }
      },
      {
        loader: 'ts-loader',
        test: /\.ts$/,
        exclude: [
          /node_modules/
        ],
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build')
  }
};