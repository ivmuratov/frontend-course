import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
};

interface AppLinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps & LinkProps> = ({ className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...props }) => {
  return(
   <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} to={to} {...props}>
        {children}
   </Link>
  );
};