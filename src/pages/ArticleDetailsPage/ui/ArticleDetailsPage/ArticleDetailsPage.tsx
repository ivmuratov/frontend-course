import {
  FC,
  memo,
} from 'react';
import {
  ArticleDetails,
  articleDetailsReducer,
} from 'entities/Article';
import { useParams } from 'react-router-dom';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsIndexReducer,
} from 'features/ArticleDetailsComments';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { useTranslation } from 'react-i18next';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetailsIndex: articleDetailsIndexReducer,
};

interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticlesDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();

  const mods: Mods = {};

  if (!id) {
    return (
      <Page className={classNames(cls.ArticlesDetailsPage, mods, [className])}>
        {t('an error occurred while loading the article')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticlesDetailsPage, mods, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
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
