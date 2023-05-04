import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage: FC<ForbiddenPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <Page data-testid='ForbiddenPage' className={classNames('', {}, [className])}>
      {t('you do not have access to this page')}
    </Page>
  );
};

export default ForbiddenPage;
