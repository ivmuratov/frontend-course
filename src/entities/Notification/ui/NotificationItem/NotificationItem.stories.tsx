import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notification } from '../../model/types/notification';
import { NotificationItem } from './NotificationItem';

const notification: Notification = {
  id: '1',
  title: 'Notification',
  description: 'Like and leave a comment',
};

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    item: notification,
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
