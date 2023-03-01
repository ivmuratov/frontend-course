import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList, withDynamicModuleLoader } from 'shared/lib/hocs/withDynamicModuleLoader/withDynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={classNames('', {}, [className])}>
      <ProfileCard />
    </div>
  );
};

export default withDynamicModuleLoader(ProfilePage, reducers, true);
