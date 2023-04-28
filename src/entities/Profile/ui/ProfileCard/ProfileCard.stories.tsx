import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/avatar.png';
import { ProfileCard } from './ProfileCard';
import { Profile } from '../../model/types/profile';

const profile: Profile = {
  username: 'admin',
  age: 26,
  first: 'Ivan',
  lastname: 'Muratov',
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Novosibirsk',
  avatar,
};

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    data: profile,
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Normal = Template.bind({});
// крашится на github actions из-за аватара
Normal.parameters = {
  loki: {
    skip: true,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'error',
};
