import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleImageBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/features';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => (
  <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
    <img className={cls.img} src={block.src} alt={block.title} />
    {block.title && (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<Text text={block.title} align='center' />}
        off={<TextDeprecated text={block.title} align={TextAlign.CENTER} />}
      />
    )}
  </div>
));
