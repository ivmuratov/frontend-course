import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({ className }) => {
  const mods: Mods = {};

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, mods, [className])}>
      {mods}
    </div>
  );
};
