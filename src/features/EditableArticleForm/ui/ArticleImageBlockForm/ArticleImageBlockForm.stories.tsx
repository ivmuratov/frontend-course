import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleImageBlockForm } from './ArticleImageBlockForm';

export default {
  title: 'features/ArticleImageBlockForm',
  component: ArticleImageBlockForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleImageBlockForm>;

const Template: ComponentStory<typeof ArticleImageBlockForm> = args => <ArticleImageBlockForm {...args} />;

export const Normal = Template.bind({});
