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

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123' },
})];

export const WithError = Template.bind({});
WithError.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123', error: 'ERROR' },
})];

export const WithLoading = Template.bind({});
WithLoading.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123', isLoading: true },
})];
