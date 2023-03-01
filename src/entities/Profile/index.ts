import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import type { Profile, ProfileSchema } from './model/types/profile';

export {
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
  Profile,
  ProfileSchema,
};
