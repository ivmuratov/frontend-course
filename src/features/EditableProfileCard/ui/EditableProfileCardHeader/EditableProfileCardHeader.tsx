import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { ToggleFeatures } from '@/shared/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const authData = useSelector(getUserAuthData);

  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card border='partial' padding='24' max>
          <HStack className={classNames('', {}, [className])} justify='between' max>
            <Text title={t('my profile')} />
            {canEdit && (
              <div>
                {readonly ? (
                  <Button onClick={onEdit} data-testid='EditableProfileCardHeader.EditButton'>
                    {t('edit')}
                  </Button>
                ) : (
                  <HStack gap='8'>
                    <Button onClick={onCancelEdit} data-testid='EditableProfileCardHeader.CancelButton' color='error'>
                      {t('cancel')}
                    </Button>
                    <Button onClick={onSave} data-testid='EditableProfileCardHeader.SaveButton' color='success'>
                      {t('save')}
                    </Button>
                  </HStack>
                )}
              </div>
            )}
          </HStack>
        </Card>
      }
      off={
        <HStack className={classNames('', {}, [className])} justify='between' max>
          <TextDeprecated title={t('my profile')} />
          {canEdit && (
            <div>
              {readonly ? (
                <ButtonDeprecated theme={ButtonTheme.OUTLINE} onClick={onEdit} data-testid='EditableProfileCardHeader.EditButton'>
                  {t('edit')}
                </ButtonDeprecated>
              ) : (
                <HStack gap='8'>
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onCancelEdit}
                    data-testid='EditableProfileCardHeader.CancelButton'
                  >
                    {t('cancel')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSave}
                    data-testid='EditableProfileCardHeader.SaveButton'
                  >
                    {t('save')}
                  </ButtonDeprecated>
                </HStack>
              )}
            </div>
          )}
        </HStack>
      }
    />
  );
};
