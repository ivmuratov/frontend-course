import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleTextBlockForm } from './ArticleTextBlockForm';

export default {
  title: 'features/ArticleTextBlockForm',
  component: ArticleTextBlockForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTextBlockForm>;

const Template: ComponentStory<typeof ArticleTextBlockForm> = args => <ArticleTextBlockForm {...args} />;

export const Normal = Template.bind({});
