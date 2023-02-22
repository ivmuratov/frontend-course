import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus laudantium, consequuntur, provident ut eum sint
        doloribus autem voluptatem beatae magnam
        minus magni distinctio cupiditate amet et eius quisquam possimus porro.`,
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus laudantium, consequuntur, provident ut eum sint
        doloribus autem voluptatem beatae magnam
        minus magni distinctio cupiditate amet et eius quisquam possimus porro.`,
  theme: TextTheme.ERROR,
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

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus laudantium, consequuntur, provident ut eum sint
        doloribus autem voluptatem beatae magnam
        minus magni distinctio cupiditate amet et eius quisquam possimus porro.`,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus laudantium, consequuntur, provident ut eum sint
        doloribus autem voluptatem beatae magnam
        minus magni distinctio cupiditate amet et eius quisquam possimus porro.`,
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
