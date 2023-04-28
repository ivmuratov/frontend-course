import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select, SelectOption } from './Select';

const options: SelectOption<string>[] = [
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
];

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    label: 'Label',
    options,
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
