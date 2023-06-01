import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { EditableArticleForm } from '@/features/EditableArticleForm';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = ({ className }) => {
  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();

  const isEdit = Boolean(id);

  if (isEdit) {
    return (
      <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
        {t('edit article by id')} {id}
      </Page>
    );
  }

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      <EditableArticleForm />
    </Page>
  );
};

export default memo(ArticleEditPage);
