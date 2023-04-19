import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/consts/consts';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (tab: ArticleType) => void
}

export const ArticleTypeTabs = memo(({
  className,
  value,
  onChangeType,
}: ArticleTypeTabsProps) => {
  const { t } = useTranslation();

  const tabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('all articles'),
    },
    {
      value: ArticleType.IT,
      content: t('it'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('economics'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('science'),
    },
  ], [t]);

  const onTabClickHandler = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  const mods: Mods = {};

  return (
    <Tabs
      className={classNames('', mods, [className])}
      tabs={tabs}
      value={value}
      onTabClick={onTabClickHandler}
    />
  );
});
