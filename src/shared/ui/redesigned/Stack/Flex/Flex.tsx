import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';

type FlexAlign = 'start' | 'center' | 'end';

type FlexDirection = 'row' | 'column';

type FlexGap = '4' | '8' | '16' | '32';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alingStart,
  center: cls.alingCenter,
  end: cls.alingEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}

export const Flex: FC<FlexProps> = ({
  className,
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap,
  max,
  ...props
}) => {
  const mods: Mods = {
    [cls.max]: max,
  };

  const classes: (string | undefined)[] = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  return (
    <div className={classNames(cls.Flex, mods, classes)} {...props}>
      {children}
    </div>
  );
};
