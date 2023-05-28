import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';
import { User } from '@/entities/User';

const author: User = {
  id: '1',
  username: 'admin',
  avatar: '',
};

export default {
  title: 'widgets/Article/ArticleAdditionalInfo',
  component: ArticleAdditionalInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [RedesignDecorator],
  args: {
    author,
    createdAt: '01.01.2020',
    views: 1000,
  },
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = args => <ArticleAdditionalInfo {...args} />;

export const Normal = Template.bind({});
