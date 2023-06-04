import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserAuthData } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Checkbox } from '@/shared/ui/redesigned/Checkbox';
import { Text } from '@/shared/ui/redesigned/Text';
import { getRouteArticleDetails } from '@/shared/const/router';
import {
  getCreateArticleFormBlocks,
  getCreateArticleFormCheckTypeEconomics,
  getCreateArticleFormCheckTypeIT,
  getCreateArticleFormCheckTypeScience,
  getCreateArticleFormImg,
  getCreateArticleFormSubtitle,
  getCreateArticleFormTitle,
  getCreateArticleFormType,
} from '../../model/selectors/createArticleFormSelectors';
import { createArticleFormActions, createArticleFormReducer } from '../../model/slices/createArticleFormSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { createArticle } from '../../model/services/createArticle';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { ArticleBlockType } from '@/entities/Article';
import { ArticleTextBlockForm } from '../ArticleTextBlockForm/ArticleTextBlockForm';
import { ArticleImageBlockForm } from '../ArticleImageBlockForm/ArticleImageBlockForm';

const initialReducers: ReducersList = {
  createArticleForm: createArticleFormReducer,
};

interface CreateArticleFormProps {
  className?: string;
}

export const EditableArticleForm = memo(({ className }: CreateArticleFormProps) => {
  const { t } = useTranslation('article');

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [isReadyArticleBlock, setIsReadyArticleBlock] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [articleBlockForms, setArticleBlockForms] = useState<ArticleBlockType[]>([]);

  const userData = useSelector(getUserAuthData);

  const title = useSelector(getCreateArticleFormTitle);

  const subtitle = useSelector(getCreateArticleFormSubtitle);

  const img = useSelector(getCreateArticleFormImg);

  const type = useSelector(getCreateArticleFormType);

  const blocks = useSelector(getCreateArticleFormBlocks);

  const checkedTypeIT = useSelector(getCreateArticleFormCheckTypeIT);

  const checkedTypeScience = useSelector(getCreateArticleFormCheckTypeScience);

  const checkedTypeEconomics = useSelector(getCreateArticleFormCheckTypeEconomics);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
    setIsReadyArticleBlock(false);
    dispatch(createArticleFormActions.clearBlock());
  };

  const removeBlockFormHandler = (indexToRemove: number) => () => {
    setArticleBlockForms(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const addArticleTextBlockForm = () => {
    setArticleBlockForms(prev => [...prev, ArticleBlockType.TEXT]);
  };

  const addArticleImageBlockForm = () => {
    setArticleBlockForms(prev => [...prev, ArticleBlockType.IMAGE]);
  };

  const onChangeTitleHandler = (value: string) => {
    dispatch(createArticleFormActions.setTitle(value));
  };

  const onChangeSubtitleHandler = (value: string) => {
    dispatch(createArticleFormActions.setSubtitle(value));
  };

  const onChangeImageHandler = (value: string) => {
    dispatch(createArticleFormActions.setImg(value));
  };

  const onChangeTypeITHandler = () => {
    dispatch(createArticleFormActions.setCheckTypeIT(!checkedTypeIT));
  };

  const onChangeTypeScienceHandler = () => {
    dispatch(createArticleFormActions.setCheckTypeScience(!checkedTypeScience));
  };

  const onChangeTypeEconomicsHandler = () => {
    dispatch(createArticleFormActions.setCheckTypeEconomics(!checkedTypeEconomics));
  };

  const saveHandler = () => {
    setIsReadyArticleBlock(true);
    onOpenModal();
  };

  const createHandler = async () => {
    const response = await dispatch(
      createArticle({
        userId: userData?.id,
        title,
        subtitle,
        img,
        views: 1,
        createdAt: new Date().toLocaleDateString(),
        type,
        blocks,
      }),
    );

    if (typeof response.payload === 'object') {
      navigate(getRouteArticleDetails(response.payload.id));
    }
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Card className={className} border='partial' padding='16'>
        <VStack gap='32'>
          <Text title={t('create article')} />
          <VStack gap='16' max>
            <Input value={title} placeholder={t('article name')} onChange={onChangeTitleHandler} />
            <Input value={subtitle} placeholder={t('article subtitle')} onChange={onChangeSubtitleHandler} />
            <Input value={img} placeholder={t('article image')} onChange={onChangeImageHandler} />
          </VStack>
          <VStack gap='8'>
            <Text text={t('select article type')} />
            <HStack gap='16'>
              <Checkbox name='IT' label={t('it')} checked={checkedTypeIT} onChange={onChangeTypeITHandler} />
              <Checkbox name='SCIENCE' label={t('science')} checked={checkedTypeScience} onChange={onChangeTypeScienceHandler} />
              <Checkbox
                name='ECONOMICS'
                label={t('economics')}
                checked={checkedTypeEconomics}
                onChange={onChangeTypeEconomicsHandler}
              />
            </HStack>
          </VStack>
          {articleBlockForms.map((block, index) => {
            switch (block) {
              case ArticleBlockType.TEXT:
                return (
                  <ArticleTextBlockForm
                    key={index}
                    isReadyArticleBlock={isReadyArticleBlock}
                    removeFormHandler={removeBlockFormHandler(index)}
                  />
                );
              case ArticleBlockType.IMAGE:
                return (
                  <ArticleImageBlockForm
                    key={index}
                    isReadyArticleBlock={isReadyArticleBlock}
                    removeFormHandler={removeBlockFormHandler(index)}
                  />
                );
              default:
                return null;
            }
          })}
          <HStack gap='8'>
            <Button onClick={addArticleTextBlockForm}>{t('add paragraph')}</Button>
            <Button onClick={addArticleImageBlockForm}>{t('add image')}</Button>
          </HStack>
          <HStack justify='end' gap='8' max>
            <Button color='success' onClick={saveHandler}>
              {t('save')}
            </Button>
          </HStack>
        </VStack>
      </Card>
      <Modal isOpen={isOpenModal} onClose={onCloseModal}>
        <VStack gap='24'>
          <Text title={t('confirm the creation of the article')} />
          <HStack justify='end' gap='8' max>
            <Button color='success' onClick={createHandler}>
              {t('ok')}
            </Button>
          </HStack>
        </VStack>
      </Modal>
    </DynamicModuleLoader>
  );
});
