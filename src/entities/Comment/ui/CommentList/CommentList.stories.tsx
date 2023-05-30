import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';
import { Comment } from '../../model/types/comment';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

const comment: Comment = {
  id: '1',
  text: 'Коммент Админа',
  user: {
    id: '1',
    username: 'Админ',
  },
};

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    comments: new Array(5).fill(0).map((_, index) => ({
      ...comment,
      id: `${index}`,
    })),
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = args => <CommentList {...args} />;

export const Normal = Template.bind({});

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [RedesignDecorator];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = {
  isLoading: true,
};
LoadingRedesigned.decorators = [RedesignDecorator];
