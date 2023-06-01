import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserAuthData } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleType } from '@/entities/Article';
import { Checkbox } from '@/shared/ui/redesigned/Checkbox';
import { Text } from '@/shared/ui/redesigned/Text';
import { useCreateArticle } from '../../model/api/createArticleApi';
import { getRouteArticles } from '@/shared/const/router';

interface CreateArticleFormProps {
  className?: string;
}

export const EditableArticleForm = memo(({ className }: CreateArticleFormProps) => {
  const { t } = useTranslation('article');

  const navigate = useNavigate();

  const userData = useSelector(getUserAuthData);

  const [createArticle] = useCreateArticle();

  const [title, setTitle] = useState('');

  const [subtitle, setSubtitle] = useState('');

  const [img, setImg] = useState('');

  const [type, setType] = useState<ArticleType[]>([]);

  const [checkedTypeAll, setCheckedTypeAll] = useState(false);

  const [checkedTypeIT, setCheckedTypeIT] = useState(false);

  const [checkedTypeScience, setCheckedTypeScience] = useState(false);

  const [checkedTypeEconomics, setCheckedTypeEconomics] = useState(false);

  const onChangeTitleHandler = (value: string) => {
    setTitle(value);
  };

  const onChangeSubtitleHandler = (value: string) => {
    setSubtitle(value);
  };

  const onChangeImageHandler = (value: string) => {
    setImg(value);
  };

  const onChangeTypeAllHandler = () => {
    setCheckedTypeAll(prev => !prev);
  };

  const onChangeTypeITHandler = () => {
    setCheckedTypeIT(prev => !prev);
  };

  const onChangeTypeScienceHandler = () => {
    setCheckedTypeScience(prev => !prev);
  };

  const onChangeTypeEconomicsHandler = () => {
    setCheckedTypeEconomics(prev => !prev);
  };

  const saveHandler = async () => {
    await createArticle({
      userId: userData?.id ?? '',
      title,
      subtitle,
      img,
      views: 1,
      createdAt: new Date().toLocaleDateString(),
      type,
      blocks: [],
    });
    navigate(getRouteArticles());
  };

  const cancelHandler = () => {
    setTitle('');
    setSubtitle('');
    setImg('');
    setType([]);
    setCheckedTypeAll(false);
    setCheckedTypeIT(false);
    setCheckedTypeScience(false);
    setCheckedTypeEconomics(false);
  };

  useEffect(() => {
    if (checkedTypeAll) {
      setType(prev => [...prev, ArticleType.ALL]);
    } else {
      setType(prev => prev.filter(value => value !== ArticleType.ALL));
    }
  }, [checkedTypeAll]);

  useEffect(() => {
    if (checkedTypeIT) {
      setType(prev => [...prev, ArticleType.IT]);
    } else {
      setType(prev => prev.filter(value => value !== ArticleType.IT));
    }
  }, [checkedTypeIT]);

  useEffect(() => {
    if (checkedTypeScience) {
      setType(prev => [...prev, ArticleType.SCIENCE]);
    } else {
      setType(prev => prev.filter(value => value !== ArticleType.SCIENCE));
    }
  }, [checkedTypeScience]);

  useEffect(() => {
    if (checkedTypeEconomics) {
      setType(prev => [...prev, ArticleType.ECONOMICS]);
    } else {
      setType(prev => prev.filter(value => value !== ArticleType.ECONOMICS));
    }
  }, [checkedTypeEconomics]);

  return (
    <Card className={className} border='partial' padding='16'>
      <VStack gap='16'>
        <Text title='Create article' />
        <HStack gap='32' max>
          <Input value={title} placeholder={t('article name')} onChange={onChangeTitleHandler} />
          <Input value={subtitle} placeholder={t('article subtitle')} onChange={onChangeSubtitleHandler} />
        </HStack>
        <Input value={img} placeholder={t('article image')} onChange={onChangeImageHandler} />
        <Card variant='light' max>
          <Text text={t('select article type')} />
          <HStack gap='16'>
            <Checkbox name='ALL' label={t('all articles')} checked={checkedTypeAll} onChange={onChangeTypeAllHandler} />
            <Checkbox name='IT' label={t('it')} checked={checkedTypeIT} onChange={onChangeTypeITHandler} />
            <Checkbox name='SCIENCE' label={t('science')} checked={checkedTypeScience} onChange={onChangeTypeScienceHandler} />
            <Checkbox
              name='ECONOMICS'
              label={t('economics')}
              checked={checkedTypeEconomics}
              onChange={onChangeTypeEconomicsHandler}
            />
          </HStack>
        </Card>
        <HStack justify='end' gap='8' max>
          <Button color='success' onClick={saveHandler}>
            {t('save')}
          </Button>
          <Button color='error' onClick={cancelHandler}>
            {t('clear')}
          </Button>
        </HStack>
      </VStack>
    </Card>
  );
});
