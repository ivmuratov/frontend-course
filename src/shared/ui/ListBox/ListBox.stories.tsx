import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    defaultValue: 'Выберите значение',
    value: undefined,
    items: [
      {
        value: '1',
        content: 'first',
      },
      {
        value: '2',
        content: 'second',
      },
      {
        value: '3',
        content: 'thirst',
      },
      {
        value: '4',
        content: 'fourth',
        disabled: true,
      },
      {
        value: '5',
        content: 'fifth',
      },
    ],
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left',
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
};
