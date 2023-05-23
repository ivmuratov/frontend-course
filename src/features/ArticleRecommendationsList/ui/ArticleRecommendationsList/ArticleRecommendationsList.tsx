import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/shared/features';

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
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<Text size='l' title={t('recommended')} />}
        off={<TextDeprecated size={TextSize.L} title={t('recommended')} />}
      />
      <ArticleList articles={articles} target='_blank' />
    </VStack>
  );
});
