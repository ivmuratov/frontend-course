import { RuleSetRule } from 'webpack';

export const buildSvgLoader = (): RuleSetRule => ({
  test: /\.svg$/i,
  exclude: /node_modules/,
  use: ['@svgr/webpack'],
});
