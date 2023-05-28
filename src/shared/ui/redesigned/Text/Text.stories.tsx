import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'shared/redesigned/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    title: 'Title',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus laudantium, consequuntur, provident ut eum sint
        doloribus autem voluptatem beatae magnam
        minus magni distinctio cupiditate amet et eius quisquam possimus porro.`,
  },
  decorators: [RedesignDecorator],
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const PrimaryS = Template.bind({});
PrimaryS.args = {
  variant: 'primary',
  size: 's',
};

export const PrimaryM = Template.bind({});
PrimaryM.args = {
  variant: 'primary',
  size: 'm',
};

export const PrimaryL = Template.bind({});
PrimaryL.args = {
  variant: 'primary',
  size: 'l',
};

export const AccentS = Template.bind({});
AccentS.args = {
  variant: 'accent',
  size: 's',
};

export const AccentM = Template.bind({});
AccentM.args = {
  variant: 'accent',
  size: 'm',
};

export const AccentL = Template.bind({});
AccentL.args = {
  variant: 'accent',
  size: 'l',
};

export const ErrorS = Template.bind({});
ErrorS.args = {
  variant: 'error',
  size: 's',
};

export const ErrorM = Template.bind({});
ErrorM.args = {
  variant: 'error',
  size: 'm',
};

export const ErrorL = Template.bind({});
ErrorL.args = {
  variant: 'error',
  size: 'l',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title',
  text: undefined,
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  title: undefined,
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus laudantium, consequuntur, provident ut eum sint
        doloribus autem voluptatem beatae magnam
        minus magni distinctio cupiditate amet et eius quisquam possimus porro.`,
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true,
};
