import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleType } from '@/entities/Article';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'features/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    value: ArticleType.ALL,
  },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = args => <ArticleTypeTabs {...args} />;

export const Normal = Template.bind({});

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [RedesignDecorator];
