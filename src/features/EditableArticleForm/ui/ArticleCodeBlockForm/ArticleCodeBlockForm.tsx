import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { TextArea } from '@/shared/ui/redesigned/TextArea';
import { ArticleBlockFormBaseProps } from '../../model/types/articleBlockFormBaseProps';
import { ArticleBlockFormHeader } from '../ArticleBlockFormHeader/ArticleBlockFormHeader';
import { createArticleFormActions } from '../../model/slices/createArticleFormSlice';
import { ArticleCodeBlock } from '@/entities/Article';
import { getCreateArticleFormBlockById } from '../../model/selectors/createArticleFormSelectors';

interface ArticleCodeBlockFormProps extends ArticleBlockFormBaseProps {
  className?: string;
}

export const ArticleCodeBlockForm = memo(({ className, blockFormId, removeFormHandler }: ArticleCodeBlockFormProps) => {
  const { t } = useTranslation('article');

  const { code } = useSelector(getCreateArticleFormBlockById(blockFormId)) as ArticleCodeBlock;

  const dispatch = useAppDispatch();

  const onChangeCodeHandler = (value: string) => {
    dispatch(createArticleFormActions.fillBlockCode({ id: blockFormId, code: value }));
  };

  return (
    <VStack className={className} gap='16' max>
      <ArticleBlockFormHeader title={t('code')} onClickHandler={removeFormHandler} />
      <TextArea value={code} onChange={onChangeCodeHandler} placeholder={t('code')} rows={5} />
    </VStack>
  );
});
