import {
  FC, Fragment, ReactNode,
} from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClasses } from '../../styles/consts';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  className?: string;
  items?: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
  onChange: <T extends string>(value: T) => void;
}

export const ListBox: FC<ListBoxProps> = ({
  className,
  items,
  value,
  defaultValue,
  readonly,
  direction = 'bottom left',
  label,
  onChange,
}) => {
  const optionsClasses: (string | undefined)[] = [
    mapDirectionClasses[direction],
  ];

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        as="div"
        disabled={readonly}
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button
          className={popupCls.trigger}
          disabled={readonly}
        >
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              as={Fragment}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [popupCls.active]: active,
                      [popupCls.disabled]: item.disabled,
                    },
                  )}
                >
                  {selected && '*'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};
