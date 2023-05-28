import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FiltersContainer } from './FiltersContainer';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'pages/Article/FiltersContainer',
  component: FiltersContainer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({}), RedesignDecorator],
} as ComponentMeta<typeof FiltersContainer>;

const Template: ComponentStory<typeof FiltersContainer> = args => <FiltersContainer {...args} />;

export const Normal = Template.bind({});
