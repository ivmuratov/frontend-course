import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo(({ className, children, ...props }: CardProps) => {
  const mods: Mods = {};

  return (
    <div className={classNames(cls.Card, mods, [className])} {...props}>
      {children}
    </div>
  );
});
