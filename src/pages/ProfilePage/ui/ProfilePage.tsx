import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import {
  EditableProfileCard,
} from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const { id } = useParams<{ id: string }>();

  const mods: Mods = {};

  if (!id) {
    return (
      <Text
        theme={TextTheme.ERROR}
        title={t('an error occurred while loading the profile')}
      />
    );
  }

  return (
    <Page className={classNames('', mods, [className])}>
      <VStack max gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
