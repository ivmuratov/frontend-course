import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextArea } from '@/shared/ui/redesigned/TextArea';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { createArticleFormActions } from '../../model/slices/createArticleFormSlice';
import { ArticleBlockType, ArticleTextBlock } from '@/entities/Article';
import { getRandomID } from '../../lib/helpers/getRandomID';

interface ArticleTextBlockFormProps {
  className?: string;
  title?: boolean;
  isReadyArticleBlock: boolean;
}

export const ArticleTextBlockForm = memo(({ className, title = false, isReadyArticleBlock }: ArticleTextBlockFormProps) => {
  const { t } = useTranslation('article');

  const [paragraphTitle, setParagraphTitle] = useState<string | undefined>(undefined);

  const [paragraphText, setParagraphText] = useState('');

  const dispatch = useAppDispatch();

  const onChangeParagraphTitleHandler = (value: string) => {
    setParagraphTitle(value);
  };

  const onChangeParagraphTextHandler = (value: string) => {
    setParagraphText(value);
  };

  useEffect(() => {
    if (isReadyArticleBlock) {
      const block: ArticleTextBlock = {
        id: getRandomID(),
        type: ArticleBlockType.TEXT,
        title: paragraphTitle,
        paragraphs: [paragraphText],
      };
      dispatch(createArticleFormActions.setBlock(block));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReadyArticleBlock]);

  return (
    <VStack className={className} gap='16' max>
      <Text text={t('paragraph')} />
      {title && <Input value={paragraphTitle} onChange={onChangeParagraphTitleHandler} placeholder={t('paragraph title')} />}
      <TextArea value={paragraphText} onChange={onChangeParagraphTextHandler} placeholder={t('paragraph text')} rows={5} />
    </VStack>
  );
});
