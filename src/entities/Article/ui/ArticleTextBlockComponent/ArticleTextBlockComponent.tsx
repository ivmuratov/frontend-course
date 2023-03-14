import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({ className }) => {
  const mods: Mods = {};

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, mods, [className])}>
      {mods}
    </div>
  );
};
