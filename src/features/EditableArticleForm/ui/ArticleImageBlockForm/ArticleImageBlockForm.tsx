import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlockType, ArticleImageBlock } from '@/entities/Article';
import { Text } from '@/shared/ui/redesigned/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { createArticleFormActions } from '../../model/slices/createArticleFormSlice';
import { getRandomID } from '../../lib/helpers/getRandomID';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleImageBlockFormProps {
  className?: string;
  isReadyArticleBlock: boolean;
  removeFormHandler: () => void;
}

export const ArticleImageBlockForm = memo(({ className, isReadyArticleBlock, removeFormHandler }: ArticleImageBlockFormProps) => {
  const { t } = useTranslation('article');

  const [imageTitle, setImageTitle] = useState('');

  const [imageSrc, setImageSrc] = useState('');

  const dispatch = useAppDispatch();

  const onChangeImageTitleHandler = (value: string) => {
    setImageTitle(value);
  };

  const onChangeImageSrcTextHandler = (value: string) => {
    setImageSrc(value);
  };

  useEffect(() => {
    if (isReadyArticleBlock) {
      const block: ArticleImageBlock = {
        id: getRandomID(),
        type: ArticleBlockType.IMAGE,
        title: imageTitle,
        src: imageSrc,
      };
      dispatch(createArticleFormActions.setBlock(block));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReadyArticleBlock]);

  return (
    <VStack className={className} gap='16' max>
      <HStack justify='between' max>
        <Text text={t('image')} />
        <Button color='error' onClick={removeFormHandler}>
          {t('remove form')}
        </Button>
      </HStack>
      <Input value={imageTitle} onChange={onChangeImageTitleHandler} placeholder={t('image title')} />
      <Input value={imageSrc} onChange={onChangeImageSrcTextHandler} placeholder={t('image source')} />
    </VStack>
  );
});
