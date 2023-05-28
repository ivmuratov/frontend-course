import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '@/entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

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
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3&_expand=user`,
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

const Template: ComponentStory<typeof ArticleRecommendationsList> = args => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [RedesignDecorator];
