import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { getRouteArticleCreate } from '@/shared/const/router';
import CreateArticleIcon from '@/shared/assets/icons/redesigned/edit.svg';

interface CreateArticleButtonProps {
  className?: string;
}

export const CreateArticleButton = memo(({ className }: CreateArticleButtonProps) => {
  const navigate = useNavigate();

  const clickHanlder = () => {
    navigate(getRouteArticleCreate());
  };

  return (
    <div className={className}>
      <Icon Svg={CreateArticleIcon} clickable onClick={clickHanlder} />
    </div>
  );
});
