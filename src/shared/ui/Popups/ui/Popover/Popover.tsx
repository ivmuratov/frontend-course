import { Popover as HPopover } from '@headlessui/react';
import { FC, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClasses } from '../../styles/consts';
import cls from './Popover.module.scss';
import popusCls from '../../styles/popup.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

export const Popover: FC<PopoverProps> = ({
  className,
  trigger,
  direction = 'bottom right',
  children,
}) => {
  const panelClasses: (string | undefined)[] = [
    mapDirectionClasses[direction],
  ];

  const mods: Mods = {};

  return (
    <HPopover className={classNames(cls.Popover, {}, [className, popusCls.popup])}>
      <HPopover.Button
        className={popusCls.trigger}
      >
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(cls.panel, {}, panelClasses)}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
