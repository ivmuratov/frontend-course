import { memo, ReactNode, useCallback } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { Card, CardTheme } from '../Card';
import cls from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo(({ className, tabs, value, onTabClick }: TabsProps) => {
  const clickHandler = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  const mods: Mods = {};

  return (
    <div className={classNames(cls.Tabs, mods, [className])}>
      {tabs.map(tab => (
        <Card
          key={tab.value}
          className={cls.tab}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={clickHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
