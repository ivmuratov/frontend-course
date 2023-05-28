import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
          username: 'admin',
          avatar:
            'https://sun6-23.userapi.com/s/v1/if1/X0uTfZikqaAno3o4QMMElC8bvl50LZhZOJrpkw1x7pNQAul4DJwFx7O8IIHW5utRYjcx-w.jpg?size=900x900&quality=96&crop=0,0,900,900&ava=1',
          roles: [UserRole.ADMIN],
        },
      },
    }),
  ],
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = args => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});

export const NormalRedesigned = Template.bind({});
NormalRedesigned.decorators = [RedesignDecorator];
