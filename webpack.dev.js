/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: './dev/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'public',
    hot: true,
    open: true
  }
});
