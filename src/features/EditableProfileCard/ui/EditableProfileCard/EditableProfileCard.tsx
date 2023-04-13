import {
  memo,
  useCallback,
  useEffect,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { ValidateProfileError } from '../../model/consts/consts';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

export const EditableProfileCard = memo(({
  className,
  id,
}: EditableProfileCardProps) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);

  const isLoading = useSelector(getProfileIsLoading);

  const error = useSelector(getProfileError);

  const readonly = useSelector(getProfileReadonly);

  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates: Record<ValidateProfileError, string> = {
    [ValidateProfileError.INCORRECT_AGE]: t('incorrect age'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect region'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('first and last name are required'),
    [ValidateProfileError.NO_DATA]: t('data not specified'),
    [ValidateProfileError.SERVER_ERROR]: t('server error on save'),
  };

  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack
        className={classNames('', {}, [className])}
        gap="8"
        max
      >
        <EditableProfileCardHeader />
        {validateErrors?.length && validateErrors.map((error) => (
          <Text
            key={error}
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[error]}
            data-testid="EditableProfileCard.Error"
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
