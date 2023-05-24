import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { ArticleTextBlock } from '../../../model/types/article';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Button } from '@/shared/ui/redesigned/Button';
import { getRouteArticleDetails } from '@/shared/const/router';
import { ArticleListItemProps } from '../ArticleListItem';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import EyeIcon from '@/shared/assets/icons/redesigned/eye.svg';
import cls from './ArticleListItemRedesigned.module.scss';

export const ArticleListItemRedesigned = memo(({ className, article, view, target }: ArticleListItemProps) => {
  const { t } = useTranslation('article');

  const userInfo = (
    <>
      <Avatar className={cls.avatar} src={article.user.avatar} size={32} />
      <Text bold text={article.user.username} />
    </>
  );

  const views = (
    <HStack gap='8'>
      <Icon Svg={EyeIcon} />
      <Text className={cls.views} text={`${article.views}`} />
    </HStack>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <Card
        data-testid='ArticleListItem'
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        padding='24'
        border='partial'
        max
      >
        <VStack gap='16' max>
          <HStack gap='8' max>
            <Avatar size={32} src={article.user.avatar} />
            <Text bold text={article.user.username} />
            <Text text={article.createdAt} />
          </HStack>
          <Text bold title={article.title} />
          <Text size='s' title={article.subtitle} />
          <AppImage className={cls.img} src={article.img} alt={article.title} fallback={<Skeleton width='100%' height={250} />} />
          {textBlock?.paragraphs && <Text className={cls.textBlock} text={textBlock.paragraphs.slice(0, 2).join(' ')} />}
          <HStack justify='between' max>
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
              <Button variant='outline'>{t('read more')}</Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <AppLink
      data-testid='ArticleListItem'
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      to={getRouteArticleDetails(article.id)}
      target={target}
    >
      <Card className={cls.card} border='partial' padding='0'>
        <AppImage className={cls.img} fallback={<Skeleton width='100%' height={200} />} alt={article.title} src={article.img} />
        <VStack className={cls.info} gap='4'>
          <Text className={cls.title} title={article.title} />
          <VStack className={cls.footer} gap='4' max>
            <HStack justify='between' max>
              <Text className={cls.date} text={article.createdAt} />
              {views}
            </HStack>
            <HStack gap='4'>{userInfo}</HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  );
});
