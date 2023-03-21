import { memo, useCallback } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(({
  className,
  article,
  view,
}: ArticleListItemProps) => {
  const { t } = useTranslation('article');

  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

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
            <Button
              onClick={onOpenArticle}
              theme={ButtonTheme.OUTLINE}
            >
              {t('read more')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, mods, [className, cls[view]])}>
      <Card className={cls.card} onClick={onOpenArticle}>
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
    </div>
  );
});
