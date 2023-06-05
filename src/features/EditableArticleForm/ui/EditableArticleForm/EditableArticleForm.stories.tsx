import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableArticleForm } from './EditableArticleForm';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'features/Article/EditableArticleForm',
  component: EditableArticleForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({}), RedesignDecorator],
} as ComponentMeta<typeof EditableArticleForm>;

const Template: ComponentStory<typeof EditableArticleForm> = args => <EditableArticleForm {...args} />;

export const Normal = Template.bind({});
