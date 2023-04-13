import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import {
  EditableProfileCard,
} from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>();

  const mods: Mods = {};

  return (
    <Page className={classNames('', mods, [className])}>
      <VStack max gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
