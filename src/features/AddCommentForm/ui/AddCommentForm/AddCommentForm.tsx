import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { ToggleFeatures } from '@/shared/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import cls from './AddCommentForm.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentFormText);

  const error = useSelector(getAddCommentFormError);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Card padding='24' border='partial' max>
            <HStack
              data-testid='AddCommentForm'
              className={classNames(cls.AddCommentFormRedesigned, {}, [className])}
              justify='between'
              gap='16'
              max
            >
              <Input
                data-testid='AddCommentForm.Input'
                className={cls.input}
                placeholder={t('enter comment text')}
                value={text}
                onChange={onCommentTextChange}
              />
              <Button data-testid='AddCommentForm.Button' onClick={onSendHandler}>
                {t('send')}
              </Button>
            </HStack>
          </Card>
        }
        off={
          <HStack data-testid='AddCommentForm' className={classNames(cls.AddCommentForm, {}, [className])} justify='between' max>
            <InputDeprecated
              data-testid='AddCommentForm.Input'
              className={cls.input}
              placeholder={t('enter comment text')}
              value={text}
              onChange={onCommentTextChange}
            />
            <ButtonDeprecated data-testid='AddCommentForm.Button' onClick={onSendHandler}>
              {t('send')}
            </ButtonDeprecated>
          </HStack>
        }
      />
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
