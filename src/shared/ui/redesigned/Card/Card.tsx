import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Card.module.scss';

type CardVariant = 'normal' | 'outlined' | 'light';

type CardPadding = '0' | '8' | '16' | '24';

type CardBorder = 'normal' | 'partial' | 'round';

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
};

const mapBorderToClass: Record<CardBorder, string> = {
  normal: 'normal_border',
  round: 'round_border',
  partial: 'partial_border',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  maxHeight?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

export const Card = memo(
  ({
    className,
    children,
    variant = 'normal',
    max = false,
    maxHeight = false,
    padding = '8',
    border = 'normal',
    ...props
  }: CardProps) => {
    const mods: Mods = {
      [cls.max]: max,
      [cls.maxHeight]: maxHeight,
    };

    const paddingClass = mapPaddingToClass[padding];

    const borderClass = mapBorderToClass[border];

    return (
      <div className={classNames(cls.Card, mods, [className, cls[variant], cls[paddingClass], cls[borderClass]])} {...props}>
        {children}
      </div>
    );
  },
);
