import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateArticleButton } from './CreateArticleButton';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'features/Article/CreateArticleButton',
  component: CreateArticleButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [RedesignDecorator],
} as ComponentMeta<typeof CreateArticleButton>;

const Template: ComponentStory<typeof CreateArticleButton> = args => <CreateArticleButton {...args} />;

export const Normal = Template.bind({});
