/* eslint-disable no-param-reassign */
import path from 'path';
import type { Configuration, RuleSetRule } from 'webpack';
import { DefinePlugin } from 'webpack';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

interface ConfigArgs {
  config: Configuration;
}

export default ({ config }: ConfigArgs) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };
  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');

  const rules = config.module!.rules as RuleSetRule[];

  config!.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': paths.src,
  };
  config!.module!.rules = rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config!.module!.rules.push(buildSvgLoader());
  config!.module!.rules.push(buildCssLoader(true));
  config!.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('https://testapi.com'),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
