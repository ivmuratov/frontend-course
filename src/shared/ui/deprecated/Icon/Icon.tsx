import { memo, SVGProps, VFC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: VFC<SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Icon = memo(({ className, Svg, inverted, ...props }: IconProps) => (
  <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} {...props} />
));
