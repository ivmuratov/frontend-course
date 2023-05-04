import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import LoginForm from './LoginForm';

export default {
  title: 'features/AuthByUsername/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => <LoginForm {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [
  StoreDecorator({
    loginForm: { username: 'admin', password: '123' },
  }),
];

export const Loading = Template.bind({});
Loading.decorators = [
  StoreDecorator({
    loginForm: { username: 'admin', password: '123', isLoading: true },
  }),
];

export const Error = Template.bind({});
Error.decorators = [
  StoreDecorator({
    loginForm: { username: 'admin', password: '123', error: 'ERROR' },
  }),
];
