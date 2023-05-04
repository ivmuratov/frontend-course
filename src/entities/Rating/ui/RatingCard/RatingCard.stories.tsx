import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
  title: 'entities/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    title: 'Title',
  },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = args => <RatingCard {...args} />;

export const Normal = Template.bind({});

export const WithRate = Template.bind({});
WithRate.args = {
  rate: 4,
};

export const WithFeedback = Template.bind({});
WithFeedback.args = {
  hasFeedback: true,
  feedbackTitle: 'Feedback title',
};
