import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleBlockFormHeader } from './ArticleBlockFormHeader';

export default {
  title: 'features/ArticleBlockFormHeader',
  component: ArticleBlockFormHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleBlockFormHeader>;

const Template: ComponentStory<typeof ArticleBlockFormHeader> = args => <ArticleBlockFormHeader {...args} />;

export const Normal = Template.bind({});
