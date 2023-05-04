import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = args => <MainPage {...args} />;

export const Normal = Template.bind({});
