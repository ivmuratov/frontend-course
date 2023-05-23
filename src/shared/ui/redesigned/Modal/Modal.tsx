import { FC, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal';
import { Overlay } from '../Overlay';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { toggleFeatures } from '@/shared/features';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
  children: ReactNode;
}

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
    <Portal element={document.getElementById('app') ?? document.body}>
      <div
        className={classNames(cls.Modal, mods, [
          className,
          theme,
          'app_modal',
          toggleFeatures({ name: 'isAppRedesigned', on: () => cls.modalNew, off: () => cls.modalOld }),
        ])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
