import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import avatar from '../../assets/tests/avatar.png';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    src: avatar,
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
};

export const Small = Template.bind({});
Small.args = {
  size: 75,
};
