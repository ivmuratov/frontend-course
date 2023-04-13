import { ComponentStory, ComponentMeta } from '@storybook/react';

import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { Article } from 'entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article: Omit<Article, 'id'> = {
  user: { id: '1', username: '123' },
  title: '',
  subtitle: '',
  img: '',
  views: 123,
  createdAt: '',
  type: [],
  blocks: [],
};

export default {
  title: 'features/ArticleRecommendationsList',
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
        ],
      },
    ],
  },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
