import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'shared/redesigned/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    placeholder: 'input',
  },
  decorators: [RedesignDecorator],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const NormalS = Template.bind({});
NormalS.args = {
  size: 's',
};

export const NormalM = Template.bind({});
NormalM.args = {
  size: 'm',
};

export const NormalL = Template.bind({});
NormalL.args = {
  size: 'l',
};
