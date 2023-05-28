import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';
import { Profile } from '../../model/types/profile';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

const profile: Profile = {
  username: 'admin',
  age: 26,
  first: 'Ivan',
  lastname: 'Muratov',
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Novosibirsk',
  avatar:
    'https://sun6-23.userapi.com/s/v1/if1/X0uTfZikqaAno3o4QMMElC8bvl50LZhZOJrpkw1x7pNQAul4DJwFx7O8IIHW5utRYjcx-w.jpg?size=900x900&quality=96&crop=0,0,900,900&ava=1',
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

const Template: ComponentStory<typeof ProfileCard> = args => <ProfileCard {...args} />;

export const Normal = Template.bind({});

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [RedesignDecorator];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = {
  isLoading: true,
};
LoadingRedesigned.decorators = [RedesignDecorator];

export const Error = Template.bind({});
Error.args = {
  error: 'error',
};

export const ErrorRedesigned = Template.bind({});
ErrorRedesigned.args = {
  error: 'error',
};
ErrorRedesigned.decorators = [RedesignDecorator];
