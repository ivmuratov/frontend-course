import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { UserRole } from '../consts/consts';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isAdminRole = createSelector(
  getUserRoles,
  (roles) => Boolean(roles?.includes(UserRole.ADMIN)),
);

export const isManagerRole = createSelector(
  getUserRoles,
  (roles) => Boolean(roles?.includes(UserRole.MANAGER)),
);
