import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'shared/redesigned/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: 'clear',
};

export const ClearSizeL = Template.bind({});
ClearSizeL.args = {
  children: 'Text',
  variant: 'clear',
  size: 'l',
};

export const ClearSizeXL = Template.bind({});
ClearSizeXL.args = {
  children: 'Text',
  variant: 'clear',
  size: 'xl',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  variant: 'outline',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  variant: 'outline',
  size: 'l',
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  variant: 'outline',
  size: 'xl',
};

export const OutlineSquare = Template.bind({});
OutlineSquare.args = {
  children: 'Text',
  square: true,
  variant: 'outline',
};

export const OutlineSquareSizeL = Template.bind({});
OutlineSquareSizeL.args = {
  children: 'Text',
  square: true,
  variant: 'outline',
  size: 'l',
};

export const OutlineSquareSizeXL = Template.bind({});
OutlineSquareSizeXL.args = {
  children: 'Text',
  square: true,
  variant: 'outline',
  size: 'xl',
};
