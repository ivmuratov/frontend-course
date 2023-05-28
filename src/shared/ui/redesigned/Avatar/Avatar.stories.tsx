import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import avatar from '../../../assets/tests/avatar.png';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'shared/redesigned/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    src: avatar,
  },
  decorators: [RedesignDecorator],
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  size: 150,
};

export const Small = Template.bind({});
Small.args = {
  size: 75,
};
