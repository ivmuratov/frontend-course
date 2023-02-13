import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string;
}

export const BugButton: FC<BugButtonProps> = ({ className }) => {
  const [error, setError] = useState(false);

  const { t } = useTranslation();

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={throwError}>
      {t('throw error')}
    </Button>
  );
};
