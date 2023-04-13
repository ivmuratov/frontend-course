import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  List,
  ListRowProps,
  WindowScroller,
} from 'react-virtualized';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { PAGE_ID } from 'widgets/Page/ui/Page';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  .map((_, index) => (
    <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
  ));

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
}

export const ArticleList = memo(({
  className,
  articles,
  isLoading,
  view = ArticleView.SMALL,
  target,
  virtualized = true,
}: ArticleListProps) => {
  const { t } = useTranslation();

  const isBig = view === ArticleView.BIG;

  const itemsPerRow = isBig ? 1 : 5;

  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRender = ({
    index,
    key,
    style,
  }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          className={cls.card}
          article={articles[i]}
          view={view}
          target={target}
          key={articles[i].id}
        />,
      );
    }

    return (
      <div
        className={cls.row}
        key={key}
        style={style}
      >
        {items}
      </div>
    );
  };

  const mods: Mods = {};

  if (!articles.length && !isLoading) {
    return (
      <div className={classNames(cls.ArticleList, mods, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('articles not found')} />
      </div>
    );
  }

  return (
    // @ts-ignore
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        height,
        width,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop,
      }) => (
        <div
          className={classNames(cls.ArticleList, mods, [className, cls[view]])}
          // @ts-ignore
          ref={registerChild}
        >
          {virtualized
            ? (
              // @ts-ignore
              <List
                height={height ?? 700}
                rowCount={rowCount}
                rowHeight={isBig ? 700 : 330}
                rowRenderer={rowRender}
                width={width ? width - 80 : 700}
                autoHeight
                onScroll={onChildScroll}
                isScrolling={isScrolling}
                scrollTop={scrollTop}
              />
            ) : (
              articles.map((item) => (
                <ArticleListItem
                  className={cls.card}
                  key={item.id}
                  article={item}
                  view={view}
                  target={target}
                />
              ))
            )}
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
});
