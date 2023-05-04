import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleBlockType } from '../../model/consts/consts';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from '../../model/selectors/articleDetails';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

const renderBlock = (block: ArticleBlock): JSX.Element | null => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
    default:
      return null;
  }
};

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const ArticleDetails: FC<ArticleDetailsProps> = ({ className, id }) => {
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const data = useSelector(getArticleDetailsData);

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
        <Skeleton className={cls.avatar} width={200} height={200} border='50%' />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width='100%' height={200} />
        <Skeleton className={cls.skeleton} width='100%' height={200} />
      </>
    );
  } else if (error) {
    content = <Text align={TextAlign.CENTER} title={t('an error occurred while loading the article')} />;
  } else {
    content = (
      <>
        <HStack justify='center' max>
          <Avatar size={200} src={data?.img} className={cls.avatar} />
        </HStack>
        <VStack data-testid='ArticleDetails.Info' gap='4' max>
          <Text className={cls.title} title={data?.title} text={data?.subtitle} size={TextSize.L} />
          <HStack gap='8'>
            <Icon Svg={EyeIcon} className={cls.icon} />
            <Text text={`${data?.views}`} />
          </HStack>
          <HStack gap='8'>
            <Icon Svg={CalendarIcon} className={cls.icon} />
            <Text text={data?.createdAt} />
          </HStack>
        </VStack>
        {data?.blocks.map(renderBlock)}
      </>
    );
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
