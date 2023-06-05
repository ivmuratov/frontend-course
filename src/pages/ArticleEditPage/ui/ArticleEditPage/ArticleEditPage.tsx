import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { EditableArticleForm } from '@/features/EditableArticleForm';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
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
      <Page className={className}>
        {t('edit article by id')} {id}
      </Page>
    );
  }

  return (
    <Page className={className}>
      <Card className={className} border='partial' padding='16'>
        <Text className={cls.title} title={t('create article')} />
        <EditableArticleForm />
      </Card>
    </Page>
  );
};

export default memo(ArticleEditPage);
