import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Normal = Template.bind({});

export const WithAuth = Template.bind({});
WithAuth.decorators = [
  StoreDecorator({
    user: {
      authData: {
        avatar: 'https://sun6-23.userapi.com/s/v1/if1/X0uTfZikqaAno3o4QMMElC8bvl50LZhZOJrpkw1x7pNQAul4DJwFx7O8IIHW5utRYjcx-w.jpg?size=900x900&quality=96&crop=0,0,900,900&ava=1',
      },
    },
  }),
];
