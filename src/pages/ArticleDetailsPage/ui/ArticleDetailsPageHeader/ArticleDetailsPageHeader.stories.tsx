import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { Article } from '@/entities/Article';
import { User } from '@/entities/User';

const user: User = {
  id: '1',
  username: 'admin',
};

const article: DeepPartial<Article> = {
  id: '1',
  user,
};

export default {
  title: 'pages/Article/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: article,
      },
    }),
  ],
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = args => <ArticleDetailsPageHeader {...args} />;

export const Normal = Template.bind({});

export const CanEdit = Template.bind({});
CanEdit.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article,
    },
    user: {
      authData: user,
    },
  }),
];
