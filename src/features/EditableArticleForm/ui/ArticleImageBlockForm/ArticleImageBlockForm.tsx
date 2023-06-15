import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleImageBlock } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleBlockFormBaseProps } from '../../model/types/articleBlockFormBaseProps';
import { ArticleBlockFormHeader } from '../ArticleBlockFormHeader/ArticleBlockFormHeader';
import { getCreateArticleFormBlockById } from '../../model/selectors/createArticleFormSelectors';
import { createArticleFormActions } from '../../model/slices/createArticleFormSlice';

interface ArticleImageBlockFormProps extends ArticleBlockFormBaseProps {
  className?: string;
}

export const ArticleImageBlockForm = memo(({ className, blockFormId, removeFormHandler }: ArticleImageBlockFormProps) => {
  const { t } = useTranslation('article');

  const { title, src } = useSelector(getCreateArticleFormBlockById(blockFormId)) as ArticleImageBlock;

  const dispatch = useAppDispatch();

  const onChangeImageTitleHandler = (value: string) => {
    dispatch(createArticleFormActions.fillBlockTitle({ id: blockFormId, title: value }));
  };

  const onChangeImageSrcTextHandler = (value: string) => {
    dispatch(createArticleFormActions.fillBlockSrc({ id: blockFormId, src: value }));
  };

  return (
    <VStack className={className} gap='16' max>
      <ArticleBlockFormHeader title={t('image')} onClickHandler={removeFormHandler} />
      <Input value={title} onChange={onChangeImageTitleHandler} placeholder={t('image title')} />
      <Input value={src} onChange={onChangeImageSrcTextHandler} placeholder={t('image source')} />
    </VStack>
  );
});
