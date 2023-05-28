import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';
import FlexContainerDecorator from '@/shared/config/storybook/FlexContainerDecorator/FlexContainerDecorator';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [
  StoreDecorator({
    user: {},
  }),
];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [
  StoreDecorator({
    user: {},
  }),
  RedesignDecorator,
  FlexContainerDecorator,
];

export const WithAuth = Template.bind({});
WithAuth.decorators = [
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
];

export const WithAuthRedesigned = Template.bind({});
WithAuthRedesigned.decorators = [
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
  RedesignDecorator,
  FlexContainerDecorator,
];
