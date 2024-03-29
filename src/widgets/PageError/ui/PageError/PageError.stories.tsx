import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageError } from './PageError';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = args => <PageError {...args} />;

export const Normal = Template.bind({});

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [RedesignDecorator];
