import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonTheme = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = memo(
  ({
    className,
    children,
    variant = 'outline',
    square,
    size = 'm',
    disabled,
    fullWidth,
    ...props
  }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const mods: Mods = {
      [cls.square]: square,
      [cls.disabled]: disabled,
      [cls.fullWidth]: fullWidth,
    };

    return (
      <button
        type='button'
        className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);
