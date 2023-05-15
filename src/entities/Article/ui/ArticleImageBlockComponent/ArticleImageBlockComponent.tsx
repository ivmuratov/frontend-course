import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
  const mods: Mods = {};

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, mods, [className])}>
      <img className={cls.img} src={block.src} alt={block.title} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
});
