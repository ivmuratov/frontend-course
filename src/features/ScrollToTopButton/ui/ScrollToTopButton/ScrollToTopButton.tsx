import { memo } from 'react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/redesigned/circle-up.svg';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo(({ className }: ScrollToTopButtonProps) => {
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <Icon Svg={CircleIcon} className={className} width={32} height={32} clickable onClick={onClickHandler} />;
});
