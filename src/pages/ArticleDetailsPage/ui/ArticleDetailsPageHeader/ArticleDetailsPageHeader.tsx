import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticleDetailsData } from '@/entities/Article';
import { RoutePath } from '@/shared/const/router';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('article');

  const navigate = useNavigate();

  const article = useSelector(getArticleDetailsData);

  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  const mods: Mods = {};

  return (
    <HStack
      className={classNames('', mods, [className])}
      justify="between"
      max
    >
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onBackToList}
      >
        {t('back to list')}
      </Button>
      {canEdit && (
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onEditArticle}
      >
        {t('edit')}
      </Button>
      )}
    </HStack>
  );
});
