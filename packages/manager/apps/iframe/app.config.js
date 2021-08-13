const path = require('path');
const webpack = require('webpack'); // eslint-disable-line
const merge = require('webpack-merge');
const webpackConfig = require('@ovh-ux/manager-webpack-config');

module.exports = (env = {}) => {
  const { config } = webpackConfig(
    {
      template: './src/app/index.html',
      basePath: './src/app',
      lessPath: ['./node_modules'],
      root: path.resolve(__dirname, './src/app'),
    },
    env,
  );
  return merge(config, {
    devServer: {
      port: 9002,
      hot: false,
      inline: false,
    },
    entry: {
      main: path.resolve('./src/app/index.js'),
    },
    output: {
      path: path.join(__dirname, 'dist/app'),
      publicPath: '/app',
      filename: '[name].[chunkhash].bundle.js',
    },
    resolve: {
      modules: [
        './node_modules',
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, '../../../node_modules'),
      ],
      mainFields: ['module', 'browser', 'main'],
    },
  });
};
