import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLogo } from './AppLogo';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'shared/redesigned/AppLogo',
  component: AppLogo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [RedesignDecorator],
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = args => <AppLogo {...args} />;

export const Normal = Template.bind({});
