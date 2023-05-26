import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
  title: 'shared/deprecated/Popups/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'first',
      },
      {
        content: 'second',
      },
      {
        content: 'thirst',
      },
      {
        content: 'fourth',
      },
      {
        content: 'fifth',
      },
    ],
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
