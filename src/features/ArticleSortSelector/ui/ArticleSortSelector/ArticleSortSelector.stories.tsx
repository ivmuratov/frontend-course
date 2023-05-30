import { ComponentStory, ComponentMeta } from '@storybook/react';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
  title: 'features/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = args => <ArticleSortSelector {...args} />;

export const Normal = Template.bind({});

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [RedesignDecorator];
