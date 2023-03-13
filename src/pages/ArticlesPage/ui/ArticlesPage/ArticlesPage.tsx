import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const mods: Mods = {};

  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticlesPage, mods, [className])}>
      {t('articles page')}
    </div>
  );
};

export default memo(ArticlesPage);
