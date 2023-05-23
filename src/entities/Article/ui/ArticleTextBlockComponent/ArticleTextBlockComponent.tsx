import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleTextBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/features';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => (
  <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
    {block.title && (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<Text className={cls.title} title={block.title} />}
        off={<TextDeprecated className={cls.title} title={block.title} />}
      />
    )}
    {block.paragraphs.map(paragraph => (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<Text key={paragraph} className={cls.paragraph} text={paragraph} />}
        off={<TextDeprecated key={paragraph} className={cls.paragraph} text={paragraph} />}
      />
    ))}
  </div>
));
