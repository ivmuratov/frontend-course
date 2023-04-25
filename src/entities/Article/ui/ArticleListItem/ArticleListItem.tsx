import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { RoutePath } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import {
  Article, ArticleTextBlock,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(({
  className,
  article,
  view,
  target,
}: ArticleListItemProps) => {
  const { t } = useTranslation('article');

  const types = <Text className={cls.types} text={article.type.join(', ')} />;

  const views = (
    <>
      <Text className={cls.views} text={`${article.views}`} />
      <Icon Svg={EyeIcon} />
    </>
  );

  const mods: Mods = {};

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks
      .find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <div className={classNames(cls.ArticleListItem, mods, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text className={cls.username} text={article.user.username} />
            <Text className={cls.date} text={article.createdAt} />
          </div>
          <Text className={cls.title} title={article.title} />
          {types}
          <img className={cls.img} src={article.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent className={cls.textBlock} block={textBlock} />
          )}
          <div className={cls.footer}>
            <AppLink
              to={RoutePath.article_details + article.id}
              target={target}
            >
              <Button
                theme={ButtonTheme.OUTLINE}
              >
                {t('read more')}
              </Button>
            </AppLink>

            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      className={classNames(cls.ArticleListItem, mods, [className, cls[view]])}
      to={RoutePath.article_details + article.id}
      target={target}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img className={cls.img} src={article.img} alt={article.title} />
          <Text className={cls.date} text={article.createdAt} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text className={cls.title} text={article.title} />
      </Card>
    </AppLink>
  );
});
