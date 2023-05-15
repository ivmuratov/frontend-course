import { Popover as HPopover } from '@headlessui/react';
import { FC, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClasses } from '../../styles/consts';
import popusCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Popover: FC<PopoverProps> = ({ className, trigger, direction = 'bottom right', children }) => {
  const panelClasses: (string | undefined)[] = [mapDirectionClasses[direction]];

  return (
    <HPopover className={classNames(cls.Popover, {}, [className, popusCls.popup])}>
      <HPopover.Button as='div' className={popusCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, panelClasses)}>{children}</HPopover.Panel>
    </HPopover>
  );
};
