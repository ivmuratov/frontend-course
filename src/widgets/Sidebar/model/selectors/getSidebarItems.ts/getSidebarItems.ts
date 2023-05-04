import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { SidebarItemType } from '../../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, userData => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: 'main',
      Icon: MainIcon,
    },
    {
      path: getRouteAbout(),
      text: 'about us',
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        text: 'profile',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'articles',
        Icon: ArticleIcon,
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
