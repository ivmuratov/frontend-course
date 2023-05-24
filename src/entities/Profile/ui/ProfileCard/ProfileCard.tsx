import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text as TextDeprecated, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Profile } from '../../model/types/profile';
import { ToggleFeatures } from '@/shared/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Card padding='24' max>
            <VStack gap='32'>
              <HStack max justify='center'>
                <Skeleton border='100%' width={128} height={128} />
              </HStack>
              <HStack gap='32' max>
                <VStack gap='16' max>
                  <Skeleton width='100%' height={38} />
                  <Skeleton width='100%' height={38} />
                  <Skeleton width='100%' height={38} />
                  <Skeleton width='100%' height={38} />
                </VStack>
                <VStack gap='16' max>
                  <Skeleton width='100%' height={38} />
                  <Skeleton width='100%' height={38} />
                  <Skeleton width='100%' height={38} />
                  <Skeleton width='100%' height={38} />
                </VStack>
              </HStack>
            </VStack>
          </Card>
        }
        off={
          <HStack className={classNames(cls.ProfileCard, {}, [className, cls.loading])} justify='center' max>
            <LoaderDeprecated />
          </HStack>
        }
      />
    );
  }

  if (error) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <HStack justify='center' max>
            <Text
              variant='error'
              align='center'
              title={t('an error occurred while loading the profile')}
              text={t('try refreshing the page')}
            />
          </HStack>
        }
        off={
          <HStack className={classNames(cls.ProfileCard, {}, [className, cls.error])} justify='center' max>
            <TextDeprecated
              theme={TextTheme.ERROR}
              align={TextAlign.CENTER}
              title={t('an error occurred while loading the profile')}
              text={t('try refreshing the page')}
            />
          </HStack>
        }
      />
    );
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card className={className} border='partial' padding='24' max>
          <VStack gap='32'>
            {data?.avatar && (
              <HStack justify='center' max>
                <Avatar size={128} src={data.avatar} alt='avatar' />
              </HStack>
            )}
            <HStack gap='24' max>
              <VStack gap='16' max>
                <Input
                  value={data?.first}
                  label={t('firstname')}
                  onChange={onChangeFirstname}
                  readonly={readonly}
                  data-testid='ProfileCard.firstname'
                />
                <Input
                  value={data?.lastname}
                  label={t('lastname')}
                  onChange={onChangeLastname}
                  readonly={readonly}
                  data-testid='ProfileCard.lastname'
                />
                <Input value={data?.age} label={t('age')} onChange={onChangeAge} readonly={readonly} />
                <Input value={data?.city} label={t('city')} onChange={onChangeCity} readonly={readonly} />
              </VStack>
              <VStack gap='16' max>
                <Input value={data?.username} label={t('username')} onChange={onChangeUsername} readonly={readonly} />
                <Input value={data?.avatar} label={t('avatar')} onChange={onChangeAvatar} readonly={readonly} />
                <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
                <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
              </VStack>
            </HStack>
          </VStack>
        </Card>
      }
      off={
        <VStack className={classNames(cls.ProfileCard, { [cls.editing]: !readonly }, [className])} gap='16' max>
          {data?.avatar && (
            <HStack justify='center' max>
              <AvatarDeprecated size={150} src={data.avatar} alt='avatar' />
            </HStack>
          )}
          <InputDeprecated
            value={data?.first}
            placeholder={t('firstname')}
            onChange={onChangeFirstname}
            readonly={readonly}
            data-testid='ProfileCard.firstname'
          />
          <InputDeprecated
            value={data?.lastname}
            placeholder={t('lastname')}
            onChange={onChangeLastname}
            readonly={readonly}
            data-testid='ProfileCard.lastname'
          />
          <InputDeprecated value={data?.age} placeholder={t('age')} onChange={onChangeAge} readonly={readonly} />
          <InputDeprecated value={data?.city} placeholder={t('city')} onChange={onChangeCity} readonly={readonly} />
          <InputDeprecated value={data?.username} placeholder={t('username')} onChange={onChangeUsername} readonly={readonly} />
          <InputDeprecated value={data?.avatar} placeholder={t('avatar')} onChange={onChangeAvatar} readonly={readonly} />
          <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
          <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
        </VStack>
      }
    />
  );
};
