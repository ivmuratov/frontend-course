import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';

export default {
  title: 'shared/redesigned/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = args => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  direction: 'row',
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8',
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16',
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  gap: '32',
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
  direction: 'column',
  gap: '4',
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
  direction: 'column',
  gap: '8',
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  direction: 'column',
  gap: '16',
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
  direction: 'column',
  gap: '32',
};
