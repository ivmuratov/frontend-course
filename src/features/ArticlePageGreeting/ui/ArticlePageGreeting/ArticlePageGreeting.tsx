import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/features';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const { isArticlesPageWasOpened } = useJsonSettings();

  const onClose = () => setIsOpen(false);

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [dispatch, isArticlesPageWasOpened]);

  const text = (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<Text title={t('welcome to articles page')} text={t('here you can search and view articles on various topics')} />}
      off={
        <TextDeprecated
          title={t('welcome to articles page')}
          text={t('here you can search and view articles on various topics')}
        />
      }
    />
  );

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
});
