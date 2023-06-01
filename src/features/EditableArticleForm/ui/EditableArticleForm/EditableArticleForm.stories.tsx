import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableArticleForm } from './EditableArticleForm';

export default {
  title: 'features/EditableArticleForm',
  component: EditableArticleForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableArticleForm>;

const Template: ComponentStory<typeof EditableArticleForm> = args => <EditableArticleForm {...args} />;

export const Normal = Template.bind({});
