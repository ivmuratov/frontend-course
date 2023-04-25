import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
  title: 'pages/Article/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
