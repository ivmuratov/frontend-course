import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className, children, theme, square, size = ButtonSize.M, ...props
}) => {
  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button type="button" className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])} {...props}>
      {children}
    </button>
  );
};
