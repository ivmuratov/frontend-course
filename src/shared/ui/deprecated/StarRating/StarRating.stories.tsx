import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StarRating } from './StarRating';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'shared/deprecated/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = args => <StarRating {...args} />;

export const Normal = Template.bind({});

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [RedesignDecorator];
