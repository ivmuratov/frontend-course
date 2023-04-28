import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../Text/Text';

import { Card, CardTheme } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: <Text title="Title" text="text" />,
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Outlined = Template.bind({});
Outlined.args = {
  theme: CardTheme.OUTLINED,
};
