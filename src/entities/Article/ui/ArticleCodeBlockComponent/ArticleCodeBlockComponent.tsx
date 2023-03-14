import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({ className }) => {
  const mods: Mods = {};

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, mods, [className])}>
      {mods}
    </div>
  );
};
