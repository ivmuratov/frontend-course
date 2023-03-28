import { memo, SVGProps, VFC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: VFC<SVGProps<SVGSVGElement>>
}

export const Icon = memo(({ className, Svg }: IconProps) => (
  <Svg className={classNames(cls.Icon, {}, [className])} />
));
