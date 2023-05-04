import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps {
  children?: ReactNode;
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = memo(({ className, children, to, theme = AppLinkTheme.PRIMARY, ...props }: AppLinkProps & LinkProps) => (
  <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} to={to} {...props}>
    {children}
  </Link>
));
