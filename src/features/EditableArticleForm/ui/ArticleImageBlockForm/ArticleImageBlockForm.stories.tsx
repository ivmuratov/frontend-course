import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleImageBlockForm } from './ArticleImageBlockForm';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'features/Article/ArticleImageBlockForm',
  component: ArticleImageBlockForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({}), RedesignDecorator],
} as ComponentMeta<typeof ArticleImageBlockForm>;

const Template: ComponentStory<typeof ArticleImageBlockForm> = args => <ArticleImageBlockForm {...args} />;

export const Normal = Template.bind({});
