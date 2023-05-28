import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import LoginForm from './LoginForm';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'features/LoginForm',
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

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [
  StoreDecorator({
    loginForm: { username: 'admin', password: '123' },
  }),
  RedesignDecorator,
];

export const Loading = Template.bind({});
Loading.decorators = [
  StoreDecorator({
    loginForm: { username: 'admin', password: '123', isLoading: true },
  }),
];

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.decorators = [
  StoreDecorator({
    loginForm: { username: 'admin', password: '123', isLoading: true },
  }),
  RedesignDecorator,
];

export const Error = Template.bind({});
Error.decorators = [
  StoreDecorator({
    loginForm: { username: 'admin', password: '123', error: 'ERROR' },
  }),
];

export const ErrorRedesigned = Template.bind({});
ErrorRedesigned.decorators = [
  StoreDecorator({
    loginForm: { username: 'admin', password: '123', error: 'ERROR' },
  }),
  RedesignDecorator,
];
