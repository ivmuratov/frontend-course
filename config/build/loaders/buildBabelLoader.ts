import type { RuleSetRule } from 'webpack';
import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx: boolean;
}

export const buildBabelLoader = ({
  isDev,
  isTsx,
}: BuildBabelLoaderProps): RuleSetRule => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: [
        isDev && require.resolve('react-refresh/babel'),
        [
          '@babel/plugin-transform-typescript',
          {
            isTsx,
          },
        ],
        isTsx && !isDev && [
          babelRemovePropsPlugin,
          {
            props: ['data-testid'],
          },
        ],
      ].filter(Boolean),
    },
  },
});
