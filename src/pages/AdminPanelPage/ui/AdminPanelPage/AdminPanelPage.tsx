import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage: FC<AdminPanelPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <Page data-testid="AdminPanelPage" className={classNames('', {}, [className])}>
      {t('admin page')}
    </Page>
  );
};

export default AdminPanelPage;
