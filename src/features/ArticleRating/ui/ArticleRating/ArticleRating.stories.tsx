import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleRating from './ArticleRating';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/Article/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    articleId: '1',
  },
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
        },
      },
    }),
  ],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = args => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

export const WithoutRate = Template.bind({});
WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
