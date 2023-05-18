import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { VStack } from '@/shared/ui/redesigned/Stack';
import SearchIcon from '@/shared/assets/icons/redesigned/search.svg';
import cls from './ArticlesFilters.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo(
  ({ className, sort, order, type, search, onChangeSearch, onChangeOrder, onChangeSort, onChangeType }: ArticlesFiltersProps) => {
    const { t } = useTranslation();

    return (
      <Card className={classNames(cls.ArticlesFilters, {}, [className])} padding='24'>
        <VStack gap='32'>
          <Input addonLeft={<Icon Svg={SearchIcon} />} onChange={onChangeSearch} value={search} placeholder={t('search')} />
          <ArticleTypeTabs value={type} onChangeType={onChangeType} className={cls.tabs} />
          <ArticleSortSelector order={order} sort={sort} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
        </VStack>
      </Card>
    );
  },
);
