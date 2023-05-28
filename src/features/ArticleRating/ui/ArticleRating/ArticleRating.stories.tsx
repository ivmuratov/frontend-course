import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleRating from './ArticleRating';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

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

const mockData = {
  url: `${__API__}/article-ratings?userId=1&articleId=1`,
  method: 'GET',
  status: 200,
};

export const Normal = Template.bind({});
Normal.parameters = {
  mockData: [
    {
      ...mockData,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.parameters = {
  mockData: [
    {
      ...mockData,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};
NormalRedesigned.decorators = [RedesignDecorator];

export const WithoutRate = Template.bind({});
WithoutRate.parameters = {
  mockData: [
    {
      ...mockData,
      response: [],
    },
  ],
};

export const WithoutRateRedesigned = Template.bind({});
WithoutRateRedesigned.parameters = {
  mockData: [
    {
      ...mockData,
      response: [],
    },
  ],
};
WithoutRateRedesigned.decorators = [RedesignDecorator];
