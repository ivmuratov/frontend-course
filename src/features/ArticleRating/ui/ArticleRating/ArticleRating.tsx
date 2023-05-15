import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { useArticleRating, useCreateArticleRate } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });

  const [createArticleRate] = useCreateArticleRate();

  const createArticleRateHandler = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        createArticleRate({
          userId: userData?.id ?? '',
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (e) {
        console.log(e);
      }
    },
    [articleId, createArticleRate, userData?.id],
  );

  const onAcceptHandler = useCallback(
    (starsCount: number, feedback?: string) => {
      createArticleRateHandler(starsCount, feedback);
    },
    [createArticleRateHandler],
  );

  const onCancelHandler = useCallback(
    (starsCount: number) => {
      createArticleRateHandler(starsCount);
    },
    [createArticleRateHandler],
  );

  if (isLoading) {
    return <Skeleton width='100%' height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      className={classNames('', {}, [className])}
      rate={rating?.rate}
      title={t('rate the article')}
      feedbackTitle={t('leave your feedback about the article')}
      onAccept={onAcceptHandler}
      onCancel={onCancelHandler}
      hasFeedback
    />
  );
});

export default ArticleRating;
