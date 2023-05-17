import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Card.module.scss';

type CardVariant = 'normal' | 'outlined' | 'light';

type CardPadding = '0' | '8' | '16' | '24';

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
}

export const Card = memo(({ className, children, variant = 'normal', max = false, padding = '8', ...props }: CardProps) => {
  const mods: Mods = {
    [cls.max]: max,
  };

  const paddingClass = mapPaddingToClass[padding];

  return (
    <div className={classNames(cls.Card, mods, [className, cls[variant], cls[paddingClass]])} {...props}>
      {children}
    </div>
  );
});
