import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsCommentsSchema } from '../../model/types/articleDetailsCommentsSchema';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

const comments: ArticleDetailsCommentsSchema = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      user: {
        id: '1',
        username: 'Админ',
      },
      text: 'Комментарий Админа',
    },
    2: {
      id: '2',
      user: {
        id: '2',
        username: 'Менеджер',
      },
      text: 'Комментарий Менеджера',
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
  decorators: [
    StoreDecorator({
      articleDetailsPage: {
        comments,
      },
    }),
  ],
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = args => <ArticleDetailsComments {...args} />;

export const Normal = Template.bind({});

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [RedesignDecorator];

export const Loading = Template.bind({});
Loading.decorators = [
  StoreDecorator({
    articleDetailsPage: {
      comments: {
        ...comments,
        isLoading: true,
      },
    },
  }),
];
