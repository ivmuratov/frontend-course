import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlockType, ArticleCodeBlock } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { createArticleFormActions } from '../../model/slices/createArticleFormSlice';
import { getRandomID } from '../../lib/helpers/getRandomID';
import { TextArea } from '@/shared/ui/redesigned/TextArea';
import { ArticleBlockFormBaseProps } from '../../model/types/articleBlockFormBaseProps';
import { ArticleBlockFormHeader } from '../ArticleBlockFormHeader/ArticleBlockFormHeader';

interface ArticleCodeBlockFormProps extends ArticleBlockFormBaseProps {
  className?: string;
}

export const ArticleCodeBlockForm = memo(({ className, isReadyArticleBlock, removeFormHandler }: ArticleCodeBlockFormProps) => {
  const { t } = useTranslation('article');

  const [code, setCode] = useState('');

  const dispatch = useAppDispatch();

  const onChangeCodeHandler = (value: string) => {
    setCode(value);
  };

  useEffect(() => {
    if (isReadyArticleBlock) {
      const block: ArticleCodeBlock = {
        id: getRandomID(),
        type: ArticleBlockType.CODE,
        code,
      };
      dispatch(createArticleFormActions.setBlock(block));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReadyArticleBlock]);

  return (
    <VStack className={className} gap='16' max>
      <ArticleBlockFormHeader title={t('code')} onClickHandler={removeFormHandler} />
      <TextArea value={code} onChange={onChangeCodeHandler} placeholder={t('code')} rows={5} />
    </VStack>
  );
});
