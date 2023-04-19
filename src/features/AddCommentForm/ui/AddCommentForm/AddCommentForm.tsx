import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm = memo(({
  className,
  onSendComment,
}: AddCommentFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentFormText);

  const error = useSelector(getAddCommentFormError);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  const mods: Mods = {};

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        className={classNames(cls.AddCommentForm, mods, [className])}
        justify="between"
        max
      >
        <Input
          className={cls.input}
          placeholder={t('enter comment text')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button onClick={onSendHandler}>{t('send')}</Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
