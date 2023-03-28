import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((
  { className, block }: ArticleCodeBlockComponentProps,
) => {
  const mods: Mods = {};

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, mods, [className])}>
      <Code text={block.code} />
    </div>
  );
});
