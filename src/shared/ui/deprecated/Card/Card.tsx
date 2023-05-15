import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  max?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Card = memo(({ className, children, theme = CardTheme.NORMAL, max = false, ...props }: CardProps) => {
  const mods: Mods = {
    [cls.max]: max,
  };

  return (
    <div className={classNames(cls.Card, mods, [className, cls[theme]])} {...props}>
      {children}
    </div>
  );
});
