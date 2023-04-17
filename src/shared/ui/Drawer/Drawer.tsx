import { memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export const Drawer = memo(({
  className,
  isOpen,
  onClose,
  children,
}: DrawerProps) => {
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
