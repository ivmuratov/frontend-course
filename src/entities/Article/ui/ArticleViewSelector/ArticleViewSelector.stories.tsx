import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ArticleViewSelector } from './ArticleViewSelector';

export default {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
