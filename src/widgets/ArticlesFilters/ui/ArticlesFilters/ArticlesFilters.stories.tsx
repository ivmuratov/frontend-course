import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesFilters } from './ArticlesFilters';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'widgets/Article/ArticlesFilters',
  component: ArticlesFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [RedesignDecorator],
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = args => <ArticlesFilters {...args} />;

export const Normal = Template.bind({});
