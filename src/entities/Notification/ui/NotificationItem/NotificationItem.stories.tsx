import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notification } from '../../model/types/notification';
import { NotificationItem } from './NotificationItem';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

const notification: Notification = {
  id: '1',
  title: 'Уведомление',
  description: 'Описание уведомления',
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

const Template: ComponentStory<typeof NotificationItem> = args => <NotificationItem {...args} />;

export const Normal = Template.bind({});

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [RedesignDecorator];
