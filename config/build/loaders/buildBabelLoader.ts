import type { RuleSetRule } from 'webpack';

export const buildBabelLoader = (isDev: boolean): RuleSetRule => ({
  test: /\.(jsx?|tsx)$/,
  use: {
    loader: 'babel-loader',
    options: {
      plugins: [
        isDev && require.resolve('react-refresh/babel'),
      ].filter(Boolean),
    },
  },
  exclude: /node_modules/,
});
