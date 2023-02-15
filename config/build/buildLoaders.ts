import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  const svgLoader: RuleSetRule = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = buildCssLoader(isDev);

  const babelLoader: RuleSetRule = {
    test: /\.(jsx?|tsx)$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  };

  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    svgLoader,
    fileLoader,
    cssLoader,
    babelLoader,
    typescriptLoader,
  ];
};
