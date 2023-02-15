import { RuleSetRule } from 'webpack';

export const buildSvgLoader = (): RuleSetRule => ({
  test: /\.svg$/i,
  use: ['@svgr/webpack'],
});
