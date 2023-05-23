import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Icon as IconDeprecated } from '../Icon/Icon';
import { Icon } from '../../redesigned/Icon';
import { ToggleFeatures, toggleFeatures } from '@/shared/features';
import StarIcon from '@/shared/assets/icons/star.svg';
import cls from './StarRating.module.scss';

const stars: number[] = [1, 2, 3, 4, 5];

interface StarRatingProps {
  className?: string;
  size?: number;
  selectedStars?: number;
  onSelect?: (starsCount: number) => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const StarRating = memo(({ className, size = 30, selectedStars = 0, onSelect }: StarRatingProps) => {
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);

  const [isSelected, setIsSelected] = useState<boolean>(!!selectedStars);

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  return (
    <div
      className={classNames(
        toggleFeatures({
          name: 'isAppRedesigned',
          off: () => cls.StarRating,
          on: () => cls.StarRatingRedesigned,
        }),
        {},
        [className],
      )}
    >
      {stars.map(starNumber => {
        const commonProps = {
          className: classNames(cls.starIcon, { [cls.selected]: isSelected }, [
            currentStarsCount >= starNumber ? cls.hovered : cls.normal,
          ]),
          Svg: StarIcon,
          key: starNumber,
          width: size,
          height: size,
          onMouseLeave: onLeave,
          onMouseEnter: onHover(starNumber),
          onClick: onClick(starNumber),
          'data-testid': `StarRating.${starNumber}`,
          'data-selected': currentStarsCount >= starNumber,
        };
        return (
          <ToggleFeatures
            feature='isAppRedesigned'
            on={<Icon clickable={!isSelected} {...commonProps} />}
            off={<IconDeprecated {...commonProps} />}
          />
        );
      })}
    </div>
  );
});
