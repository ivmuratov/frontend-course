import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getUserAuthData, isAdminRole, isManagerRole, userActions,
} from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const isAdmin = useSelector(isAdminRole);

  const isManager = useSelector(isManagerRole);

  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction="bottom left"
      items={[
        ...(isAdminPanelAvailable ? [{
          content: t('admin panel'),
          href: getRouteAdminPanel(),
        }] : []),
        {
          content: t('profile'),
          href: getRouteProfile(authData.id),
        },
        {
          content: t('exit'),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar src={authData.avatar} size={30} />}
    />
  );
});
