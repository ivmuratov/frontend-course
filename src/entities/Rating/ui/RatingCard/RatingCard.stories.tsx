import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RatingCard } from './RatingCard';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'entities/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    title: 'Рейтинг',
  },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = args => <RatingCard {...args} />;

export const Normal = Template.bind({});

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [RedesignDecorator];

export const WithRate = Template.bind({});
WithRate.args = {
  rate: 4,
};

export const WithRateRedesigned = Template.bind({});
WithRateRedesigned.args = {
  rate: 4,
};
WithRateRedesigned.decorators = [RedesignDecorator];

export const WithFeedback = Template.bind({});
WithFeedback.args = {
  hasFeedback: true,
  feedbackTitle: 'Отзыв',
};

export const WithFeedbackRedesigned = Template.bind({});
WithFeedbackRedesigned.args = {
  hasFeedback: true,
  feedbackTitle: 'Отзыв',
};
WithFeedbackRedesigned.decorators = [RedesignDecorator];
