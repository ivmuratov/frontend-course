import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCodeBlockForm } from './ArticleCodeBlockForm';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'features/Article/ArticleCodeBlockForm',
  component: ArticleCodeBlockForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({}), RedesignDecorator],
} as ComponentMeta<typeof ArticleCodeBlockForm>;

const Template: ComponentStory<typeof ArticleCodeBlockForm> = args => <ArticleCodeBlockForm {...args} />;

export const Normal = Template.bind({});
