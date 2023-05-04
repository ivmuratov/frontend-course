import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Profile } from '@/entities/Profile';
import ProfilePage from './ProfilePage';

const profileData: Profile = {
  username: 'admin',
  age: 26,
  first: 'Ivan',
  lastname: 'Muratov',
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Novosibirsk',
};

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    StoreDecorator({
      profile: {
        form: profileData,
      },
    }),
  ],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = args => <ProfilePage {...args} />;

export const Normal = Template.bind({});

export const Loading = Template.bind({});
Loading.decorators = [
  StoreDecorator({
    profile: {
      isLoading: true,
    },
  }),
];

export const Error = Template.bind({});
Error.decorators = [
  StoreDecorator({
    profile: {
      error: 'error',
    },
  }),
];
