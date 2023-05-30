import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from './Tabs';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'shared/redesigned/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    tabs: [
      {
        value: 'tab 1',
        content: 'таб 1',
      },
      {
        value: 'tab 2',
        content: 'выбранный',
      },
      {
        value: 'tab 3',
        content: 'таб 3',
      },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
  },
  decorators: [RedesignDecorator],
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args} />;

export const Normal = Template.bind({});
