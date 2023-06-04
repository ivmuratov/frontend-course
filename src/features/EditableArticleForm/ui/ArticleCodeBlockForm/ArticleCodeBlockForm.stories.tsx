import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCodeBlockForm } from './ArticleCodeBlockForm';

export default {
  title: 'features/ArticleCodeBlockForm',
  component: ArticleCodeBlockForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCodeBlockForm>;

const Template: ComponentStory<typeof ArticleCodeBlockForm> = args => <ArticleCodeBlockForm {...args} />;

export const Normal = Template.bind({});
