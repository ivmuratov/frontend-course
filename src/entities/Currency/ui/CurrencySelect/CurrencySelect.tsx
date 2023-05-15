import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { SelectOption } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';

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
    <ListBox
      className={classNames('', {}, [className])}
      value={value}
      defaultValue={t('currency')}
      items={options}
      readonly={readonly}
      direction='top right'
      label={t('currency')}
      onChange={onChangeHandler}
    />
  );
});
