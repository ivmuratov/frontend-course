import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';
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
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    comment,
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = args => <CommentCard {...args} />;

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
