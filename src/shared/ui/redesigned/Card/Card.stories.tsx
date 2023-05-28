import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../Text/Text';

import { Card } from './Card';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'shared/redesigned/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: <Text title='Title' text='text' />,
  },
  decorators: [RedesignDecorator],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  variant: 'normal',
};

export const Normal8 = Template.bind({});
Normal8.args = {
  padding: '8',
};

export const Normal16 = Template.bind({});
Normal16.args = {
  padding: '16',
};

export const Normal24 = Template.bind({});
Normal24.args = {
  padding: '24',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

export const Outlined8 = Template.bind({});
Outlined8.args = {
  variant: 'outlined',
  padding: '8',
};

export const Outlined16 = Template.bind({});
Outlined16.args = {
  variant: 'outlined',
  padding: '16',
};

export const Outlined24 = Template.bind({});
Outlined24.args = {
  variant: 'outlined',
  padding: '24',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
};

export const Light8 = Template.bind({});
Light8.args = {
  variant: 'light',
  padding: '8',
};

export const Light16 = Template.bind({});
Light16.args = {
  variant: 'light',
  padding: '16',
};

export const Light24 = Template.bind({});
Light24.args = {
  variant: 'light',
  padding: '24',
};

export const Partial = Template.bind({});
Partial.args = {
  border: 'partial',
};

export const Partial8 = Template.bind({});
Partial8.args = {
  border: 'partial',
  padding: '8',
};

export const Partial16 = Template.bind({});
Partial16.args = {
  border: 'partial',
  padding: '16',
};

export const Partial24 = Template.bind({});
Partial24.args = {
  border: 'partial',
  padding: '24',
};

export const Round = Template.bind({});
Round.args = {
  border: 'round',
};

export const Round8 = Template.bind({});
Round8.args = {
  border: 'round',
  padding: '8',
};

export const Round16 = Template.bind({});
Round16.args = {
  border: 'round',
  padding: '16',
};

export const Round24 = Template.bind({});
Round24.args = {
  border: 'round',
  padding: '24',
};
