import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GamingPageLayout from '../components/layouts/GamingPageLayout';
import GroupPageLayout from '../components/layouts/GroupPageLayout';
import MarketplacePageLayout from '../components/layouts/MarketplacePageLayout';
import NewsFeedLayout from '../components/layouts/NewsFeedLayout';
import ProfilePageLayout from '../components/layouts/ProfilePageLayout';
import ReelPageLayout from '../components/layouts/ReelPageLayout';
import StoriesLayout from '../components/layouts/StoriesLayout';
import GamingPage from '../pages/gaming';
import GroupPage from '../pages/group';
import LoginPage from '../pages/login';
import MarketplacePage from '../pages/marketplace';
import NewsFeedPage from '../pages/newsfeed';
import PageNotFound from '../pages/notfound';
import ProfilePage from '../pages/profile';
import RegisterPage from '../pages/signup';
import ReelPage from '../pages/reel';
import StoriesPage from '../pages/stories';
import { PrivateRoute } from './PrivateRoute';
import {
  GAMING,
  GROUP,
  HOME,
  LOGIN,
  MARKETPLACE,
  PROFILE,
  REEL,
  REGISTER,
  STORIES,
} from './routes';

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={REGISTER} element={<RegisterPage />} />

      <Route
        path={HOME}
        element={
          <PrivateRoute layout={NewsFeedLayout}>
            <NewsFeedPage />
          </PrivateRoute>
        }
      />

      <Route
        path={REEL}
        element={
          <PrivateRoute layout={ReelPageLayout}>
            <ReelPage />
          </PrivateRoute>
        }
      />

      <Route
        path={MARKETPLACE}
        element={
          <PrivateRoute layout={MarketplacePageLayout}>
            <MarketplacePage />
          </PrivateRoute>
        }
      />

      <Route
        path={GROUP}
        element={
          <PrivateRoute layout={GroupPageLayout}>
            <GroupPage />
          </PrivateRoute>
        }
      />

      <Route
        path={GAMING}
        element={
          <PrivateRoute layout={GamingPageLayout}>
            <GamingPage />
          </PrivateRoute>
        }
      />

      <Route
        path={PROFILE}
        element={
          <PrivateRoute layout={ProfilePageLayout}>
            <ProfilePage />
          </PrivateRoute>
        }
      />

      <Route
        path={STORIES}
        element={
          <PrivateRoute layout={StoriesLayout}>
            <StoriesPage />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routers;
