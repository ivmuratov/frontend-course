import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '@/entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article: Omit<Article, 'id'> = {
  user: { id: '1', username: '123' },
  title: 'TS news',
  img: 'https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo.png',
  subtitle: '',
  views: 12345,
  createdAt: '01.01.2023',
  type: [],
  blocks: [],
};

export default {
  title: 'features/Article/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock, StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { id: '1', ...article },
          { id: '2', ...article },
          { id: '3', ...article },
          { id: '4', ...article },
        ],
      },
    ],
  },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
