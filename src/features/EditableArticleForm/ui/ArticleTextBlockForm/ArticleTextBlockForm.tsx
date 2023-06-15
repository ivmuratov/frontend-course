import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { TextArea } from '@/shared/ui/redesigned/TextArea';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { createArticleFormActions } from '../../model/slices/createArticleFormSlice';
import { ArticleBlockFormBaseProps } from '../../model/types/articleBlockFormBaseProps';
import { ArticleBlockFormHeader } from '../ArticleBlockFormHeader/ArticleBlockFormHeader';
import { getCreateArticleFormBlockById } from '../../model/selectors/createArticleFormSelectors';
import { ArticleTextBlock } from '@/entities/Article';

interface ArticleTextBlockFormProps extends ArticleBlockFormBaseProps {
  className?: string;
}

export const ArticleTextBlockForm = memo(({ className, blockFormId, removeFormHandler }: ArticleTextBlockFormProps) => {
  const { t } = useTranslation('article');

  const { title, paragraphs } = useSelector(getCreateArticleFormBlockById(blockFormId)) as ArticleTextBlock;

  const dispatch = useAppDispatch();

  const onChangeParagraphTitleHandler = (value: string) => {
    dispatch(createArticleFormActions.fillBlockTitle({ id: blockFormId, title: value }));
  };

  const onChangeParagraphTextHandler = (value: string) => {
    dispatch(createArticleFormActions.fillBlockParagraph({ id: blockFormId, paragraph: value }));
  };

  return (
    <VStack className={className} gap='16' max>
      <ArticleBlockFormHeader title={t('paragraph')} onClickHandler={removeFormHandler} />
      <Input value={title} onChange={onChangeParagraphTitleHandler} placeholder={t('paragraph title')} />
      <TextArea value={paragraphs[0]} onChange={onChangeParagraphTextHandler} placeholder={t('paragraph text')} rows={5} />
    </VStack>
  );
});
