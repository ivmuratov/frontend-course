import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectOption } from '@/shared/ui/deprecated/Select';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/shared/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options: SelectOption<Country>[] = [
  {
    value: Country.Russia,
    content: Country.Russia,
  },
  {
    value: Country.Armenia,
    content: Country.Armenia,
  },
  {
    value: Country.Belarus,
    content: Country.Belarus,
  },
  {
    value: Country.Kazakhstan,
    content: Country.Kazakhstan,
  },
  {
    value: Country.Ukraine,
    content: Country.Ukraine,
  },
];

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
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
          defaultValue={t('country')}
          items={options}
          readonly={readonly}
          direction='top right'
          label={t('country')}
          onChange={onChangeHandler}
        />
      }
      off={
        <ListBoxDeprecated
          className={className}
          value={value}
          defaultValue={t('country')}
          items={options}
          readonly={readonly}
          direction='top right'
          label={t('country')}
          onChange={onChangeHandler}
        />
      }
    />
  );
});
