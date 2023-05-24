import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface ArticleDetailsContainerProps {
  className?: string;
}

export const ArticleDetailsContainer = memo(({ className }: ArticleDetailsContainerProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <Card className={className} padding='24' border='partial' max>
      <ArticleDetails id={id} />
    </Card>
  );
});
