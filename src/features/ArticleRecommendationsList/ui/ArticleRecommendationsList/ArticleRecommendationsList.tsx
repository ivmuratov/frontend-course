import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { TextSize, Text } from '@/shared/ui/deprecated/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(({ className }: ArticleRecommendationsListProps) => {
  const { t } = useTranslation('article');

  const { data: articles, isLoading, error } = useArticleRecommendationsList(4);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack data-testid='ArticleRecommendationsList' className={classNames('', {}, [className])} gap='8'>
      <Text size={TextSize.L} title={t('recommended')} />
      <ArticleList articles={articles} target='_blank' />
    </VStack>
  );
});
