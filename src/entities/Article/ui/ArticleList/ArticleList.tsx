import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { ToggleFeatures } from '@/shared/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);

interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo(({ className, articles, isLoading, view = ArticleView.SMALL, target }: ArticleListProps) => {
  const { t } = useTranslation();

  if (articles && !articles.length && !isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('articles not found')} />
      </div>
    );
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <HStack data-testid='ArticleList' className={classNames(cls.ArticleListRedesigned, {}, [])} wrap='wrap' gap='16'>
          {articles &&
            articles.map(item => (
              <ArticleListItem className={cls.card} key={item.id} article={item} view={view} target={target} />
            ))}
          {isLoading && getSkeletons(view)}
        </HStack>
      }
      off={
        <div data-testid='ArticleList' className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          {articles &&
            articles.map(item => (
              <ArticleListItem className={cls.card} key={item.id} article={item} view={view} target={target} />
            ))}
          {isLoading && getSkeletons(view)}
        </div>
      }
    />
  );
});
