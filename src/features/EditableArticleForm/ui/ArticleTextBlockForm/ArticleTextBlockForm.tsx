import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TextArea } from '@/shared/ui/redesigned/TextArea';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleTextBlockFormProps {
  className?: string;
}

export const ArticleTextBlockForm = memo(({ className }: ArticleTextBlockFormProps) => {
  const { t } = useTranslation('article');

  return (
    <VStack className={className} gap='16' max>
      <Text text={t('paragraph')} />
      <Input placeholder={t('paragraph title')} />
      <TextArea rows={5} placeholder={t('paragraph text')} />
    </VStack>
  );
});
