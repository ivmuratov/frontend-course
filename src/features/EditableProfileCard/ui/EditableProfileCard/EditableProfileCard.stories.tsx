import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Profile } from '@/entities/Profile';
import { EditableProfileCard } from './EditableProfileCard';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

const profile: Profile = {
  id: '1',
  first: 'Василий',
  lastname: 'Васильев',
  age: 100,
  city: 'Урюпинск',
  currency: Currency.USD,
  country: Country.Kazakhstan,
  username: 'zxc',
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
  decorators: [
    StoreDecorator({
      profile: {
        form: profile,
      },
    }),
  ],
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = args => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [RedesignDecorator];
