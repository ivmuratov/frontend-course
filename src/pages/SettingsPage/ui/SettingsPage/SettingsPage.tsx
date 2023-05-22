import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UIDesignSwitcher } from '@/features/UIDesignSwitcher';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage: FC<SettingsPageProps> = ({ className }) => {
  const { t } = useTranslation('settings');

  return (
    <Page className={className}>
      <VStack gap='16'>
        <Text title={t('user settings')} />
        <UIDesignSwitcher />
      </VStack>
    </Page>
  );
};

export default memo(SettingsPage);
