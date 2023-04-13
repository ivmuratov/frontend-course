import HTMLWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BuildOptions } from './types/config';

export const buildPlugins = ({
  paths,
  isDev,
  analyze,
  analyzePort,
  apiUrl,
  project,
}: BuildOptions) => {
  const plugins: WebpackPluginInstance[] = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: analyze ? 'server' : 'disabled',
      analyzerPort: analyzePort,
    }),
    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales },
      ],
    }),
    new CircularPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
};
