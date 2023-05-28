import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notification } from '../../model/types/notification';
import { NotificationList } from './NotificationList';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

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
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = args => <NotificationList {...args} />;

const mockData = {
  url: `${__API__}/notifications`,
  method: 'GET',
  status: 200,
  response: new Array(3).fill(0).map((_, index) => ({
    ...notification,
    id: `${index}`,
  })),
};

export const Normal = Template.bind({});
Normal.parameters = {
  mockData: [mockData],
};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.parameters = {
  mockData: [mockData],
};
NormalRedesigned.decorators = [RedesignDecorator];

export const NormalWithDelay = Template.bind({});
NormalWithDelay.parameters = {
  mockData: [
    {
      ...mockData,
      delay: 10000,
    },
  ],
};

export const NormalWithDelayRedesigned = Template.bind({});
NormalWithDelayRedesigned.parameters = {
  mockData: [
    {
      ...mockData,
      delay: 10000,
    },
  ],
};
NormalWithDelayRedesigned.decorators = [RedesignDecorator];
