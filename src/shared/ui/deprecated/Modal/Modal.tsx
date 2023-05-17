import { FC, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Portal } from '../../redesigned/Portal';
import { Overlay } from '../../redesigned/Overlay';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
  children: ReactNode;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Modal: FC<ModalProps> = ({ children, className, isOpen, lazy, onClose }) => {
  const { theme } = useTheme();

  const { isMounted, isClosing, close } = useModal({
    isOpen,
    onClose,
    animationDelay: 300,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
