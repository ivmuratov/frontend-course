import { memo } from 'react';
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
import { ArticleTextBlockForm } from '../ArticleTextBlockForm/ArticleTextBlockForm';

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

  const userData = useSelector(getUserAuthData);

  const title = useSelector(getCreateArticleFormTitle);

  const subtitle = useSelector(getCreateArticleFormSubtitle);

  const img = useSelector(getCreateArticleFormImg);

  const type = useSelector(getCreateArticleFormType);

  const blocks = useSelector(getCreateArticleFormBlocks);

  const checkedTypeIT = useSelector(getCreateArticleFormCheckTypeIT);

  const checkedTypeScience = useSelector(getCreateArticleFormCheckTypeScience);

  const checkedTypeEconomics = useSelector(getCreateArticleFormCheckTypeEconomics);

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

  const saveHandler = async () => {
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

  const clearHandler = () => {
    dispatch(createArticleFormActions.clearForm());
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
          <ArticleTextBlockForm />
          <HStack justify='end' gap='8' max>
            <Button color='success' onClick={saveHandler}>
              {t('save')}
            </Button>
            <Button color='error' onClick={clearHandler}>
              {t('clear')}
            </Button>
          </HStack>
        </VStack>
      </Card>
    </DynamicModuleLoader>
  );
});
