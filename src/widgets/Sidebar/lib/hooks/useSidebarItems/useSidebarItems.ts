import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router';
import { SidebarItemType } from '../../../model/types/sidebar';
import { toggleFeatures } from '@/shared/features';
import MainIconDeprecated from '@/shared/assets/icons/main.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article.svg';

import MainIcon from '@/shared/assets/icons/redesigned/home.svg';
import ArticleIcon from '@/shared/assets/icons/redesigned/article.svg';
import AboutIcon from '@/shared/assets/icons/redesigned/info.svg';
import ProfileIcon from '@/shared/assets/icons/redesigned/avatar.svg';

export const useSidebarItems = () => {
  const userData = useSelector(getUserAuthData);
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: 'main',
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => MainIconDeprecated,
        on: () => MainIcon,
      }),
    },
    {
      path: getRouteAbout(),
      text: 'about us',
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => AboutIconDeprecated,
        on: () => AboutIcon,
      }),
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        text: 'profile',
        authOnly: true,
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
      },
      {
        path: getRouteArticles(),
        text: 'articles',
        authOnly: true,
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ArticleIconDeprecated,
          on: () => ArticleIcon,
        }),
      },
    );
  }

  return sidebarItemsList;
};
