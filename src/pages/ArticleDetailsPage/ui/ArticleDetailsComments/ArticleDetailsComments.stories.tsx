import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsCommentsSchema } from '@/features/ArticleDetailsComments';
import { ArticleDetailsComments } from './ArticleDetailsComments';

const comments: ArticleDetailsCommentsSchema = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      user: {
        id: '1',
        username: 'admin',
      },
      text: 'comment by admin',
    },
    2: {
      id: '2',
      user: {
        id: '2',
        username: 'manager',
      },
      text: 'comment by manager',
    },
  },
};

export default {
  title: 'pages/Article/ArticleDetailsComments',
  component: ArticleDetailsComments,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({
    articleDetailsIndex: {
      comments,
    },
  })],
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Normal = Template.bind({});

export const Loading = Template.bind({});
Loading.decorators = [StoreDecorator({
  articleDetailsIndex: {
    comments: {
      ...comments,
      isLoading: true,
    },
  },
})];
