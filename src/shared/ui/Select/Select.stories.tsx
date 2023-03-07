import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    label: 'Label',
    options: [
      {
        value: '1',
        content: 'Первый пункт',
      },
      {
        value: '2',
        content: 'Второй пункт',
      },
      {
        value: '3',
        content: 'Третий пункт',
      },
      {
        value: '4',
        content: 'Четвертый пункт',
      },
    ],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
};
