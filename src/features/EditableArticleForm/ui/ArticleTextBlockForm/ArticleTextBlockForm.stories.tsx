import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleTextBlockForm } from './ArticleTextBlockForm';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'features/Article/ArticleTextBlockForm',
  component: ArticleTextBlockForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({}), RedesignDecorator],
} as ComponentMeta<typeof ArticleTextBlockForm>;

const Template: ComponentStory<typeof ArticleTextBlockForm> = args => <ArticleTextBlockForm {...args} />;

export const Normal = Template.bind({});
