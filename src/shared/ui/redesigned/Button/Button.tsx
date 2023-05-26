import { ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonTheme = 'clear' | 'outline' | 'filled';

export type ButtonColor = 'normal' | 'success' | 'error';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  variant?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  color?: ButtonColor;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    className,
    children,
    variant = 'outline',
    square,
    size = 'm',
    disabled,
    fullWidth,
    color = 'normal',
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
  };

  return (
    <button
      type='button'
      className={classNames(cls.Button, mods, [className, cls[variant], cls[size], cls[color]])}
      disabled={disabled}
      ref={ref}
      {...otherProps}
    >
      <div className={cls.addonLeft}>{addonLeft}</div>
      {children}
      <div className={cls.addonRight}>{addonRight}</div>
    </button>
  );
});
