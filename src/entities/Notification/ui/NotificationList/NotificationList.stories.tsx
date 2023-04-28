import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { Notification } from '../../model/types/notification';
import { NotificationList } from './NotificationList';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const notification: Notification = {
  id: '1',
  title: 'Notification',
  description: 'Like and leave a comment',
};

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock, StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response:
        new Array(3)
          .fill(0)
          .map((_, index) => ({
            ...notification,
            id: `${index}`,
          })),
    },
  ],
};

export const NormalWithDelay = Template.bind({});
NormalWithDelay.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      delay: 10000,
      response:
        new Array(3)
          .fill(0)
          .map((_, index) => ({
            ...notification,
            id: `${index}`,
          })),
    },
  ],
};
