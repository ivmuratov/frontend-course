import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectOption } from '@/shared/ui/deprecated/Select';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options: SelectOption<Currency>[] = [
  {
    value: Currency.RUB,
    content: Currency.RUB,
  },
  {
    value: Currency.EUR,
    content: Currency.EUR,
  },
  {
    value: Currency.USD,
    content: Currency.USD,
  },
];

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <ListBox
          className={className}
          value={value}
          defaultValue={t('currency')}
          items={options}
          readonly={readonly}
          direction={__PROJECT__ === 'storybook' ? 'bottom right' : 'top right'}
          label={t('currency')}
          onChange={onChangeHandler}
        />
      }
      off={
        <ListBoxDeprecated
          className={className}
          value={value}
          defaultValue={t('currency')}
          items={options}
          readonly={readonly}
          direction={__PROJECT__ === 'storybook' ? 'bottom right' : 'top right'}
          label={t('currency')}
          onChange={onChangeHandler}
        />
      }
    />
  );
});
