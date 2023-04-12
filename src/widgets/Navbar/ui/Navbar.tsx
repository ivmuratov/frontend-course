/* eslint-disable i18next/no-literal-string */
import {
  memo,
  useCallback,
  useState,
} from 'react';
import {
  getUserAuthData,
  isAdminRole,
  isManagerRole,
  userActions,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);

  const isAdmin = useSelector(isAdminRole);

  const isManager = useSelector(isManagerRole);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          theme={TextTheme.INVERTED}
          title="Ulbi TV"
        />
        <AppLink
          className={cls.createBtn}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.article_create}
        >
          {t('create article')}
        </AppLink>
        <Dropdown
          className={cls.dropdown}
          direction="bottom left"
          items={[
            ...(isAdminPanelAvailable ? [{
              content: t('admin panel'),
              href: RoutePath.admin_panel,
            }] : []),
            {
              content: t('profile'),
              href: RoutePath.profile + authData.id,
            },
            {
              content: t('exit'),
              onClick: onLogout,
            },
          ]}
          trigger={<Avatar src={authData.avatar} size={30} />}
        />
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Text
        className={cls.appName}
        theme={TextTheme.INVERTED}
        title="Ulbi TV"
      />
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onOpenModal}
      >
        {t('enter')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
