import { memo, ReactNode } from 'react';
import { NavLink, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'secondary' | 'red';

interface AppLinkProps {
  children?: ReactNode;
  className?: string;
  variant?: AppLinkVariant;
  activeClassName?: string;
}

export const AppLink = memo(
  ({ className, children, to, variant = 'primary', activeClassName = '', ...props }: AppLinkProps & LinkProps) => (
    <NavLink
      className={({ isActive }) => classNames('', { [activeClassName]: isActive }, [className, cls[variant]])}
      to={to}
      {...props}
    >
      {children}
    </NavLink>
  ),
);
