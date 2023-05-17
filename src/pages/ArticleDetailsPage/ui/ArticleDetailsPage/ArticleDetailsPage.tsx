/* eslint-disable react/no-unstable-nested-components */
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsIndexReducer } from '@/features/ArticleDetailsComments';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';
import { ToggleFeatures } from '@/shared/features';
import { Card } from '@/shared/ui/deprecated/Card';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetailsIndex: articleDetailsIndexReducer,
};

interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticlesDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article');

  const { id = '1' } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
        <VStack gap='16' max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ToggleFeatures
            feature='isArticleRatingEnabled'
            on={<ArticleRating articleId={id} />}
            off={<Card>{t('article rating coming soon')}</Card>}
          />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

// некорректно работает HoC, сначала грузится thunk, потом инициализируется стейт.
// в связи с этим теряется isLoading, и невозможно отобразить скелетоны
// export default withDynamicModuleLoader(ArticleDetailsPage, reducers, true);

export default memo(ArticleDetailsPage);
