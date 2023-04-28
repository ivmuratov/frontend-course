import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../../../Button';

const panel: { id: string, content: string }[] = [
  {
    id: '1',
    content: 'item 1',
  },
  {
    id: '2',
    content: 'item 2',
  },
  {
    id: '3',
    content: 'item 3',
  },
];

export default {
  title: 'shared/Popups/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    trigger: <Button>Trigger</Button>,
    children: panel.map(({ id, content }) => (
      <div key={id}>
        {content}
      </div>
    )),
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Primary = Template.bind({});
