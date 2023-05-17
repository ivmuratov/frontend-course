import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus laudantium, consequuntur, provident ut eum sint
        doloribus autem voluptatem beatae magnam
        minus magni distinctio cupiditate amet et eius quisquam possimus porro.`,
};

export const SizeS = Template.bind({});
SizeS.args = {
  title: 'Title',
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus laudantium, consequuntur, provident ut eum sint
        doloribus autem voluptatem beatae magnam
        minus magni distinctio cupiditate amet et eius quisquam possimus porro.`,
  size: 's',
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Title',
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus laudantium, consequuntur, provident ut eum sint
        doloribus autem voluptatem beatae magnam
        minus magni distinctio cupiditate amet et eius quisquam possimus porro.`,
  size: 'm',
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title',
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus laudantium, consequuntur, provident ut eum sint
        doloribus autem voluptatem beatae magnam
        minus magni distinctio cupiditate amet et eius quisquam possimus porro.`,
  size: 'l',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus laudantium, consequuntur, provident ut eum sint
        doloribus autem voluptatem beatae magnam
        minus magni distinctio cupiditate amet et eius quisquam possimus porro.`,
  variant: 'error',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus laudantium, consequuntur, provident ut eum sint
        doloribus autem voluptatem beatae magnam
        minus magni distinctio cupiditate amet et eius quisquam possimus porro.`,
};
