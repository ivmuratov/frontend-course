import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems.ts/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { ToggleFeatures } from '@/shared/features';
import { AppLogo } from '@/shared/ui/AppLogo';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  const itemsList = useMemo(
    () => sidebarItemsList.map(item => <SidebarItem key={item.path} item={item} collapsed={collapsed} />),
    [collapsed, sidebarItemsList],
  );

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <aside data-testid='sidebar' className={classNames(cls.SidebarRedesigned, { [cls.collapsed]: collapsed }, [className])}>
          <AppLogo className={cls.appLogo} />
        </aside>
      }
      off={
        <aside data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button
            data-testid='sidebar-toggle'
            onClick={onToggle}
            className={cls.collapseBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            size={ButtonSize.L}
            square
          >
            {collapsed ? '>' : '<'}
          </Button>
          <VStack role='navigation' className={cls.items} gap='8'>
            {itemsList}
          </VStack>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} className={cls.lang} />
          </div>
        </aside>
      }
    />
  );
});
