import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className, children, theme, ...props
}) => (
  <button type="button" className={classNames(cls.Button, {}, [className, cls[theme]])} {...props}>
    {children}
  </button>
);
