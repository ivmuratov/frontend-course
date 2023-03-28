import {
  FC, memo,
} from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Article, ArticleBlock, ArticleBlockType } from '../../model/types/article';
import cls from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

const renderBlock = (block: ArticleBlock): JSX.Element | null => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      );
    default:
      return null;
  }
};

interface ArticleDetailsProps {
  className?: string;
  data?: Article;
  isLoading?: boolean;
  error?: string;
}

const ArticleDetails: FC<ArticleDetailsProps> = ({
  className,
  data,
  isLoading,
  error,
}) => {
  const mods: Mods = {};

  const { t } = useTranslation('article');

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleDetails, mods, [className])}>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ArticleDetails, mods, [className])}>
        <Text
          align={TextAlign.CENTER}
          title={t('an error occurred while loading the article')}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetails, mods, [className])}>
      <div className={cls.avatarWrapper}>
        <Avatar
          size={200}
          src={data?.img}
          className={cls.avatar}
        />
      </div>
      <Text
        className={cls.title}
        title={data?.title}
        text={data?.subtitle}
        size={TextSize.L}
      />
      <div className={cls.articleInfo}>
        <Icon Svg={EyeIcon} className={cls.icon} />
        <Text text={`${data?.views}`} />
      </div>
      <div className={cls.articleInfo}>
        <Icon Svg={CalendarIcon} className={cls.icon} />
        <Text text={data?.createdAt} />
      </div>
      {data?.blocks.map(renderBlock)}
    </div>
  );
};

export default memo(ArticleDetails);
