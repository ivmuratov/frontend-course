import { memo, SVGProps, VFC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ArticleView } from '@/entities/Article';
import { ToggleFeatures, toggleFeatures } from '@/shared/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import ListIconDeprecated from '@/shared/assets/icons/list.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled.svg';
import ListIcon from '@/shared/assets/icons/redesigned/burger.svg';
import TiledIcon from '@/shared/assets/icons/redesigned/tile.svg';
import cls from './ArticleViewSelector.module.scss';

interface ViewType {
  view: ArticleView;
  icon: VFC<SVGProps<SVGSVGElement>>;
}

const viewTypes: ViewType[] = [
  {
    view: ArticleView.SMALL,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
  {
    view: ArticleView.BIG,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ToggleFeatures
      feature='isArticleRatingEnabled'
      on={
        <Card className={classNames(cls.ArticleViewSelectorRedesigned, {}, [className])} border='round'>
          <HStack gap='8'>
            {viewTypes.map(value => (
              <Icon
                key={value.view}
                className={classNames('', { [cls.notSelected]: value.view !== view })}
                Svg={value.icon}
                clickable
                onClick={onClick(value.view)}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
          {viewTypes.map(value => (
            <ButtonDeprecated key={value.view} onClick={onClick(value.view)} theme={ButtonTheme.CLEAR}>
              <IconDeprecated
                className={classNames('', { [cls.notSelected]: value.view !== view })}
                Svg={value.icon}
                height={24}
                width={24}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  );
});
