import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { ToggleFeatures } from '@/shared/features';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('an unexpected error occurred')}</p>
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<Button onClick={reloadPage}>{t('refresh page')}</Button>}
        off={<ButtonDeprecated onClick={reloadPage}>{t('refresh page')}</ButtonDeprecated>}
      />
    </div>
  );
};
