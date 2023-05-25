import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = memo(({ className }: ScrollToolbarProps) => (
  <VStack className={classNames(cls.ScrollToolbar, {}, [className])} justify='center' align='center' max>
    <ScrollToTopButton />
  </VStack>
));
