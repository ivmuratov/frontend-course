import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';
import RedesignDecorator from '@/shared/config/storybook/RedesignDecorator/RedesignDecorator';

export default {
  title: 'shared/redesigned/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Repellendus laudantium, consequuntur, provident ut eum sint
        doloribus autem voluptatem beatae magnam
        minus magni distinctio cupiditate amet et eius quisquam possimus porro.`,
  },
  decorators: [RedesignDecorator],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Normal = Template.bind({});
