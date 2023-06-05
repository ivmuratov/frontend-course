import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleBlockFormHeader } from './ArticleBlockFormHeader';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'features/Article/ArticleBlockFormHeader',
  component: ArticleBlockFormHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    title: 'Заголовок',
  },
  decorators: [RedesignDecorator],
} as ComponentMeta<typeof ArticleBlockFormHeader>;

const Template: ComponentStory<typeof ArticleBlockFormHeader> = args => <ArticleBlockFormHeader {...args} />;

export const Normal = Template.bind({});
