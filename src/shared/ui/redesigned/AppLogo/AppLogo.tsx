import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { HStack } from '../../redesigned/Stack';
import AppLogoIcon from '@/shared/assets/icons/app-image.svg';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => (
  <HStack max justify='center' className={classNames(cls.appLogoWrapper, {}, [className])}>
    <div className={cls.gradientBig} />
    <div className={cls.gradientSmall} />
    <AppLogoIcon className={cls.appLogo} height={size} width={size} color='black' />
  </HStack>
));
