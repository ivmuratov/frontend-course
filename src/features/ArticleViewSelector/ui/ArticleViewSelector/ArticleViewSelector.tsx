import { memo, SVGProps, VFC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list.svg';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ArticleView } from '@/entities/Article';
import cls from './ArticleViewSelector.module.scss';

interface ViewType {
  view: ArticleView;
  icon: VFC<SVGProps<SVGSVGElement>>;
}

const viewTypes: ViewType[] = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
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
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map(value => (
        <Button key={value.view} onClick={onClick(value.view)} theme={ButtonTheme.CLEAR}>
          <Icon className={classNames('', { [cls.notSelected]: value.view !== view })} Svg={value.icon} />
        </Button>
      ))}
    </div>
  );
});
