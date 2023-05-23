import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Text.module.scss';

type TextVariant = 'primary' | 'error' | 'accent';

type TextAlign = 'right' | 'left' | 'center';

type TextSize = 's' | 'm' | 'l';

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
  s: cls.size_s,
  m: cls.size_m,
  l: cls.size_l,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  bold?: boolean;
  'data-testid'?: string;
}

export const Text = memo(
  ({
    className,
    title,
    text,
    variant = 'primary',
    align = 'left',
    size = 'm',
    bold,
    'data-testid': dataTestId = '',
  }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    const sizeClass = mapSizeToClass[size];

    return (
      <div className={classNames(cls.Text, { [cls.bold]: bold }, [className, cls[variant], cls[align], sizeClass])}>
        {title && (
          <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
            {title}
          </HeaderTag>
        )}
        {text && (
          <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
            {text}
          </p>
        )}
      </div>
    );
  },
);
