import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

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

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });

  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  return [
    svgLoader,
    fileLoader,
    cssLoader,
    codeBabelLoader,
    tsxBabelLoader,
  ];
};
