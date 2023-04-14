import type { RuleSetRule } from 'webpack';
import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx: boolean;
}

export const buildBabelLoader = ({
  isDev,
  isTsx,
}: BuildBabelLoaderProps): RuleSetRule => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  use: {
    loader: 'babel-loader',
    options: {
      plugins: [
        isDev && require.resolve('react-refresh/babel'),
        [
          '@babel/plugin-transform-typescript',
          {
            isTsx,
          },
        ],
        isTsx && [
          babelRemovePropsPlugin,
          {
            props: ['data-testid'],
          },
        ],
      ].filter(Boolean),
    },
  },
  exclude: /node_modules/,
});
