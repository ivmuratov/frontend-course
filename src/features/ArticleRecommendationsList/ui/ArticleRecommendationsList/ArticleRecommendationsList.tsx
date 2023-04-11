import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(({ className }: ArticleRecommendationsListProps) => {
  const { t } = useTranslation('article');

  const { data: articles, isLoading, error } = useArticleRecommendationsList(4);

  if (isLoading || error) {
    return null;
  }

  return (
    <VStack
      className={classNames('', {}, [className])}
      gap="8"
    >
      <Text
        size={TextSize.L}
        title={t('recommended')}
      />
      {articles && (
      <ArticleList
        articles={articles}
        target="_blank"
      />
      )}
    </VStack>
  );
});
