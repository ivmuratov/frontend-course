import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          theme={TextTheme.INVERTED}
          // eslint-disable-next-line i18next/no-literal-string
          title='Ulbi TV'
        />
        <AppLink className={cls.createBtn} theme={AppLinkTheme.SECONDARY} to={getRouteArticleCreate()}>
          {t('create article')}
        </AppLink>
        <HStack className={cls.actions} gap='16'>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Text
        className={cls.appName}
        theme={TextTheme.INVERTED}
        // eslint-disable-next-line i18next/no-literal-string
        title='Ulbi TV'
      />
      <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>
        {t('enter')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
