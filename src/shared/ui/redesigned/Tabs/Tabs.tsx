import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Card } from '../Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';
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
  direction?: FlexDirection;
}

export const Tabs = memo(({ className, tabs, value, onTabClick, direction = 'row' }: TabsProps) => {
  const clickHandler = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <Flex className={classNames(cls.Tabs, {}, [className])} direction={direction} gap='8' align='start'>
      {tabs.map(tab => {
        const isSelected = tab.value === value;
        return (
          <Card
            variant={isSelected ? 'light' : 'normal'}
            className={classNames(cls.tab, {
              [cls.selected]: isSelected,
            })}
            key={tab.value}
            onClick={clickHandler(tab)}
            border='round'
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
});
