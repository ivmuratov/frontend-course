import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { HStack } from '../Stack';
import AppLogoIcon from '@/shared/assets/icons/app-image.svg';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo(({ className }: AppLogoProps) => (
  <HStack max justify='center' className={classNames(cls.appLogoWrapper, {}, [className])}>
    <div className={cls.gradientBig} />
    <div className={cls.gradientSmall} />
    <AppLogoIcon className={cls.appLogo} />
  </HStack>
));
