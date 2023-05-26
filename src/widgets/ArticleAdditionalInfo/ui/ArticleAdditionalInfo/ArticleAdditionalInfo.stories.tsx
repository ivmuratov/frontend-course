import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';

export default {
  title: 'widgets/Article/ArticleAdditionalInfo',
  component: ArticleAdditionalInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = args => <ArticleAdditionalInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
