import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile } from 'entities/Profile';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  first: 'Ivan',
  lastname: 'Ivanov',
  age: 30,
  city: 'Novosibirsk',
  currency: Currency.RUB,
  country: Country.Russia,
  username: '12345',
};

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({
    profile: {
      form: profile,
    },
  })],
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
