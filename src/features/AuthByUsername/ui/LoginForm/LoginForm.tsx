import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { ReducersList, withDynamicModuleLoader } from '@/shared/lib/hocs/withDynamicModuleLoader/withDynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { ToggleFeatures } from '@/shared/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);

  const password = useSelector(getLoginPassword);

  const isLoading = useSelector(getLoginIsLoading);

  const error = useSelector(getLoginError);

  const forceUpdate = useForceUpdate();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
      forceUpdate();
    }
  }, [dispatch, forceUpdate, onSuccess, password, username]);

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <VStack className={classNames(cls.LoginForm, {}, [className])} gap='16'>
          <Text title={t('auth form')} />
          {error && <Text text={t('incorrect login or password')} variant='error' />}
          <Input
            className={cls.input}
            type='text'
            autoFocus
            placeholder={t('enter username')}
            value={username}
            onChange={onChangeUsername}
          />
          <Input
            className={cls.input}
            type='text'
            placeholder={t('enter password')}
            value={password}
            onChange={onChangePassword}
          />
          <Button className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
            {t('enter')}
          </Button>
        </VStack>
      }
      off={
        <div className={classNames(cls.LoginForm, {}, [className])}>
          <TextDeprecated title={t('auth form')} />
          {error && <TextDeprecated text={t('incorrect login or password')} theme={TextTheme.ERROR} />}
          <InputDeprecated
            className={cls.input}
            type='text'
            autoFocus
            placeholder={t('enter username')}
            value={username}
            onChange={onChangeUsername}
          />
          <InputDeprecated
            className={cls.input}
            type='text'
            placeholder={t('enter password')}
            value={password}
            onChange={onChangePassword}
          />
          <ButtonDeprecated className={cls.loginBtn} theme={ButtonTheme.OUTLINE} onClick={onLoginClick} disabled={isLoading}>
            {t('enter')}
          </ButtonDeprecated>
        </div>
      }
    />
  );
});

export default withDynamicModuleLoader(LoginForm, initialReducers, true);
