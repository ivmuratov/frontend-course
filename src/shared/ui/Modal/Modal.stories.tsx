import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
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
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Primary = Template.bind({});
