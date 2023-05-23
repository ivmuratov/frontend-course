import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import CopyIconNew from '@/shared/assets/icons/redesigned/copy.svg';
import { Button, ButtonTheme } from '../../deprecated/Button';
import { Icon } from '../Icon';
import { ToggleFeatures } from '@/shared/features';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
          <Icon clickable onClick={onCopy} className={cls.copyBtn} Svg={CopyIconNew} />
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(cls.Code, {}, [className])}>
          <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
            <CopyIcon className={cls.copyIcon} />
          </Button>
          <code>{text}</code>
        </pre>
      }
    />
  );
});
