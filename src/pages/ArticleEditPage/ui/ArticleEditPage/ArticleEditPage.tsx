import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { Page } from 'widgets/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

export const ArticleEditPage: FC<ArticleEditPageProps> = ({ className }) => {
  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();

  const isEdit = Boolean(id);

  const mods: Mods = {};

  if (isEdit) {
    return (
      <Page className={classNames(cls.ArticleEditPage, mods, [className])}>
        {t('edit article by id')}
        {' '}
        {id}
      </Page>
    );
  }

  return (
    <Page className={classNames(cls.ArticleEditPage, mods, [className])}>
      {t('create article')}
    </Page>
  );
};

export default memo(ArticleEditPage);
