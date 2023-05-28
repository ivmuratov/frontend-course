import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'shared/redesigned/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    text: `export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;`,
  },
  decorators: [RedesignDecorator],
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = args => <Code {...args} />;

export const Normal = Template.bind({});
