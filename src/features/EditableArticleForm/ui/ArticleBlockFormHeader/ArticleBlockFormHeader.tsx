import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleBlockFormHeaderProps {
  className?: string;
  title?: string;
  onClickHandler: () => void;
}

export const ArticleBlockFormHeader = memo(({ className, title, onClickHandler }: ArticleBlockFormHeaderProps) => {
  const { t } = useTranslation('article');

  return (
    <HStack className={className} justify='between' max>
      <Text text={title} />
      <Button color='error' onClick={onClickHandler}>
        {t('remove form')}
      </Button>
    </HStack>
  );
});
