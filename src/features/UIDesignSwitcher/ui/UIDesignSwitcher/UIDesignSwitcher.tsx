import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/redesigned/Text';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlags } from '@/shared/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

interface UIDesignSwitcherProps {
  className?: string;
}

export const UIDesignSwitcher = memo(({ className }: UIDesignSwitcherProps) => {
  const { t } = useTranslation();

  const isAppRedesigned = getFeatureFlag('isAppRedesigned');

  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);

  const [isLoading, setIsLoading] = useState(false);

  const forceUpdate = useForceUpdate();

  const items = [
    {
      content: t('new'),
      value: 'new',
    },
    {
      content: t('old'),
      value: 'old',
    },
  ];

  const onChange = async (value: string) => {
    if (authData) {
      setIsLoading(true);
      await dispatch(
        updateFeatureFlags({
          userId: authData.id,
          newFeatures: {
            isAppRedesigned: value === 'new',
          },
        }),
      ).unwrap();
      setIsLoading(false);
      forceUpdate();
    }
  };

  return (
    <HStack gap='16'>
      <Text text={t('interface option')} />
      {isLoading ? (
        <Skeleton width={100} height={40} />
      ) : (
        <ListBox className={className} onChange={onChange} items={items} value={isAppRedesigned ? 'new' : 'old'} />
      )}
    </HStack>
  );
});
