import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';
import { Comment } from '../../model/types/comment';

const comment: Comment = {
  id: '1',
  text: 'Hello World',
  user: {
    id: '1',
    username: 'Vasya',
  },
};

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    comments: new Array(5)
      .fill(0)
      .map((_, index) => ({
        ...comment,
        id: `${index}`,
      })),
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
