import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'shared/redesigned/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: 'button',
  },
  decorators: [RedesignDecorator],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const NormalClear = Template.bind({});
NormalClear.args = {
  variant: 'clear',
};

export const NormalClearSizeL = Template.bind({});
NormalClearSizeL.args = {
  variant: 'clear',
  size: 'l',
};

export const NormalClearSizeXL = Template.bind({});
NormalClearSizeXL.args = {
  variant: 'clear',
  size: 'xl',
};

export const NormalOutline = Template.bind({});
NormalOutline.args = {
  variant: 'outline',
};

export const NormalOutlineSizeL = Template.bind({});
NormalOutlineSizeL.args = {
  variant: 'outline',
  size: 'l',
};

export const NormalOutlineSizeXL = Template.bind({});
NormalOutlineSizeXL.args = {
  variant: 'outline',
  size: 'xl',
};

export const NormalFilled = Template.bind({});
NormalFilled.args = {
  variant: 'filled',
};

export const NormalFilledSizeL = Template.bind({});
NormalFilledSizeL.args = {
  variant: 'filled',
  size: 'l',
};

export const NormalFilledSizeXL = Template.bind({});
NormalFilledSizeXL.args = {
  variant: 'filled',
  size: 'xl',
};

export const SuccessOutline = Template.bind({});
SuccessOutline.args = {
  color: 'success',
  variant: 'outline',
};

export const SuccessOutlineSizeL = Template.bind({});
SuccessOutlineSizeL.args = {
  color: 'success',
  variant: 'outline',
  size: 'l',
};

export const SuccessOutlineSizeXL = Template.bind({});
SuccessOutlineSizeXL.args = {
  color: 'success',
  variant: 'outline',
  size: 'xl',
};

export const ErrorOutline = Template.bind({});
ErrorOutline.args = {
  color: 'error',
  variant: 'outline',
};

export const ErrorOutlineSizeL = Template.bind({});
ErrorOutlineSizeL.args = {
  color: 'error',
  variant: 'outline',
  size: 'l',
};

export const ErrorOutlineSizeXL = Template.bind({});
ErrorOutlineSizeXL.args = {
  color: 'error',
  variant: 'outline',
  size: 'xl',
};
