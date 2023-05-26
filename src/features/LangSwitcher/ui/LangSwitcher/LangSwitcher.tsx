import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { ToggleFeatures } from '@/shared/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      feature='isArticleRatingEnabled'
      on={
        <Button className={classNames('', {}, [className])} variant='clear' onClick={toggle}>
          {t(short ? 'short language' : 'language')}
        </Button>
      }
      off={
        <ButtonDeprecated className={classNames('', {}, [className])} theme={ButtonTheme.CLEAR_INVERTED} onClick={toggle}>
          {t(short ? 'short language' : 'language')}
        </ButtonDeprecated>
      }
    />
  );
});
