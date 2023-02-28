import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList, withDynamicModuleLoader } from 'shared/lib/hocs/withDynamicModuleLoader/withDynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  return (
    <div className={classNames('', {}, [className])}>
      {t('profile page')}
    </div>
  );
};

export default withDynamicModuleLoader(ProfilePage, reducers, true);
