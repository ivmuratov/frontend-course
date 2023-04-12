import { Menu } from '@headlessui/react';
import { FC, Fragment, ReactNode } from 'react';
import { Mods, classNames } from 'shared/lib/helpers/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItem {
  href?: string;
  content?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const directionClasses: Record<DropdownDirection, string> = {
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
};

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown: FC<DropdownProps> = ({
  className,
  items,
  trigger,
  direction = 'bottom right',
}) => {
  const menuClasses: (string | undefined)[] = [
    directionClasses[direction],
  ];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              className={classNames(
                cls.item,
                {
                  [cls.active]: active,
                },
              )}
              onClick={item.onClick}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                key={item.href}
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
