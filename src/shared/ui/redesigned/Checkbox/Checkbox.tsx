import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { HStack } from '../Stack';

interface CheckboxProps {
  className?: string;
  name: string;
  label: string;
  checked?: boolean;
  onChange: () => void;
}

export const Checkbox = memo(({ className, name, label, checked, onChange }: CheckboxProps) => (
  <HStack className={classNames('', {}, [className])} gap='4'>
    <input id={label} type='checkbox' name={name} checked={checked} onChange={onChange} />
    <label htmlFor={label}>{label}</label>
  </HStack>
));
