import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  rate?: number;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo(
  ({ className, title, feedbackTitle, hasFeedback, rate = 0, onCancel, onAccept }: RatingCardProps) => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [starsCount, setStarsCount] = useState(rate);

    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
      (selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
          setIsModalOpen(true);
        } else {
          onAccept?.(selectedStarsCount);
        }
      },
      [hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
      setIsModalOpen(false);
      onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
      setIsModalOpen(false);
      onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent: JSX.Element = (
      <>
        <Text title={feedbackTitle} />
        <Input data-testid='RatingCard.Input' value={feedback} placeholder={t('your feedback')} onChange={setFeedback} />
      </>
    );

    return (
      <Card data-testid='RatingCard' className={classNames('', {}, [className])} max>
        <VStack align='center' gap='8' max>
          <Text title={starsCount ? t('thank you for rating') : title} />
          <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
        </VStack>
        <BrowserView>
          <Modal isOpen={isModalOpen} lazy>
            <VStack gap='32' max>
              {modalContent}
              <HStack gap='16' justify='end' max>
                <Button data-testid='RatingCard.Close' theme={ButtonTheme.OUTLINE_RED} onClick={cancelHandler}>
                  {t('close')}
                </Button>
                <Button data-testid='RatingCard.Send' onClick={acceptHandler}>
                  {t('send')}
                </Button>
              </HStack>
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
            <VStack gap='32'>
              {modalContent}
              <Button size={ButtonSize.L} fullWidth onClick={acceptHandler}>
                {t('send')}
              </Button>
            </VStack>
          </Drawer>
        </MobileView>
      </Card>
    );
  },
);
