import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticlesDetailsPageProps> = ({ className }) => {
  const mods: Mods = {};

  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticlesDetailsPage, mods, [className])}>
      {t('article details page')}
    </div>
  );
};

export default memo(ArticleDetailsPage);
