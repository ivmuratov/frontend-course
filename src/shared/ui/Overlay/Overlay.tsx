import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo(({
  className,
  onClick,
}: OverlayProps) => {
  const mods: Mods = {};

  return (
    <div
      className={classNames(cls.Overlay, mods, [className])}
      onClick={onClick}
    />
  );
});
