import { useMemo, FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { UserRole, getUserAuthData, getUserRoles } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

const RequireAuth: FC<RequireAuthProps> = ({ children, roles }) => {
  const location = useLocation();

  const auth = useSelector(getUserAuthData);

  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles: boolean = useMemo(() => {
    if (!roles) {
      return true;
    }
    return roles.some((requiredRole) => userRoles?.includes(requiredRole));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
