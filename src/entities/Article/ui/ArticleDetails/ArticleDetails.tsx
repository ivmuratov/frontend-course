import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from '../../model/selectors/articleDetails';
import { ToggleFeatures } from '@/shared/features';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { renderArticleBlock } from './renderArticleBlock';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import cls from './ArticleDetails.module.scss';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <HStack className={cls.avatarWrapper} justify='center' max>
        <AvatarDeprecated className={cls.avatar} size={200} src={article?.img} />
      </HStack>
      <VStack gap='4' max data-testid='ArticleDetails.Info'>
        <TextDeprecated className={cls.title} title={article?.title} text={article?.subtitle} size={TextSize.L} />
        <HStack gap='8' className={cls.articleInfo}>
          <IconDeprecated className={cls.icon} Svg={EyeIcon} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>
        <HStack gap='8' className={cls.articleInfo}>
          <IconDeprecated className={cls.icon} Svg={CalendarIcon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <Text title={article?.title} size='l' bold />
      <Text title={article?.subtitle} />
      <AppImage className={cls.img} src={article?.img} fallback={<Skeleton width='100%' height={420} border='16px' />} />
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

const ArticleDetails: FC<ArticleDetailsProps> = ({ className, id }) => {
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleDetailsIsLoading);

  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content: JSX.Element;

  if (isLoading) {
    content = (
      <>
        <SkeletonDeprecated className={cls.avatar} width={200} height={200} border='50%' />
        <SkeletonDeprecated className={cls.title} width={300} height={32} />
        <SkeletonDeprecated className={cls.skeleton} width={600} height={24} />
        <SkeletonDeprecated className={cls.skeleton} width='100%' height={200} />
        <SkeletonDeprecated className={cls.skeleton} width='100%' height={200} />
      </>
    );
  } else if (error) {
    content = <TextDeprecated align={TextAlign.CENTER} title={t('an error occurred while loading the article')} />;
  } else {
    content = <ToggleFeatures feature='isAppRedesigned' on={<Redesigned />} off={<Deprecated />} />;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack className={classNames(cls.ArticleDetails, {}, [className])} gap='16' max>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetails);
