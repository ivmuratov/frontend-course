import { ChangeEvent, TextareaHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './TextArea.module.scss';

type HTMLTextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'readOnly' | 'size'>;

interface TextAreaProps extends HTMLTextAreaProps {
  className?: string;
  value?: string;
  autofocus?: boolean;
  onChange?: (value: string) => void;
}

export const TextArea = memo(({ className, value, autofocus, onChange, placeholder, ...props }: TextAreaProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.TextAreaWrapper, { [cls.focused]: isFocused }, [className])}>
      <textarea
        className={cls.textarea}
        ref={ref}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
    </div>
  );
});
