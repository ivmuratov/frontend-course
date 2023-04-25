import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Select, SelectOption } from '@/shared/ui/Select';
import { ArticleSortField } from '../../model/consts/consts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(({
  className,
  order,
  sort,
  onChangeOrder,
  onChangeSort,
}: ArticleSortSelectorProps) => {
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('ascending'),
    },
    {
      value: 'desc',
      content: t('descending'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('creation date'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('title'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views'),
    },
  ], [t]);

  const mods: Mods = {};

  return (
    <div className={classNames(cls.ArticleSortSelector, mods, [className])}>
      <Select<ArticleSortField>
        options={sortFieldOptions}
        label={t('sort by')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        className={cls.order}
        options={orderOptions}
        label={t('by')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
