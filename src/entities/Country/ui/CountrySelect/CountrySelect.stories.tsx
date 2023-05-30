import { ComponentStory, ComponentMeta } from '@storybook/react';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';
import { Country } from '../../model/types/country';
import { CountrySelect } from './CountrySelect';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    value: Country.Russia,
  },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = args => <CountrySelect {...args} />;

export const Normal = Template.bind({});

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [RedesignDecorator];
