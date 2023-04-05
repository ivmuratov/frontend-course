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
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const PrimaryBottom = Template.bind({});
PrimaryBottom.args = {
  direction: 'bottom',
};

export const PrimaryTop = Template.bind({});
PrimaryTop.args = {
  direction: 'top',
};
