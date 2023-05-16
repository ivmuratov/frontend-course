import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/shared/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/shared/assets/icons/redesigned/theme.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme(newTheme => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <ToggleFeatures
      feature='isArticleRatingEnabled'
      on={<Icon Svg={ThemeIcon} onClick={onToggleHandler} clickable />}
      off={
        <Button className={classNames('', {}, [className])} theme={ButtonTheme.CLEAR} onClick={onToggleHandler}>
          <IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted />
        </Button>
      }
    />
  );
});
