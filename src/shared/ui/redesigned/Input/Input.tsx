import { ChangeEvent, InputHTMLAttributes, ReactNode, memo, useEffect, useRef, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'size'>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  autofocus?: boolean;
  onChange?: (value: string) => void;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  size?: InputSize;
}

export const Input = memo(
  ({
    className,
    type = 'text',
    value,
    label,
    placeholder,
    autofocus,
    onChange,
    readonly,
    addonLeft,
    addonRight,
    size = 'm',
    ...props
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const mods: Mods = {
      [cls.readonly]: readonly,
      [cls.focused]: isFocused,
      [cls.withAddonLeft]: Boolean(addonLeft),
      [cls.withAddonRight]: Boolean(addonRight),
    };

    const input = (
      <div className={classNames(cls.InputWrapper, mods, [className, cls[size]])}>
        <div className={cls.addonLeft}>{addonLeft}</div>
        <input
          className={cls.input}
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          readOnly={readonly}
          placeholder={placeholder}
          {...props}
        />
        <div className={cls.addonRight}>{addonRight}</div>
      </div>
    );

    if (label) {
      return (
        <HStack gap='8' max>
          <Text text={label} />
          {input}
        </HStack>
      );
    }

    return input;
  },
);
