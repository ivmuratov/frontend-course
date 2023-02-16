import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
          to={RoutePath.main}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>
            {t('main')}
          </span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
          to={RoutePath.about}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>
            {t('about us')}
          </span>
        </AppLink>

      </div>
      <div className={cls.switchers}>
        <LangSwitcher short={collapsed} className={cls.lang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
