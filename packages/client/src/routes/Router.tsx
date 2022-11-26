import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamingPageLayout from '../components/layouts/GamingPageLayout';
import HomePageLayout from '../components/layouts/HomePageLayout';
import MarketplacePageLayout from '../components/layouts/MarketplacePage';
import ProfilePageLayout from '../components/layouts/ProfilePageLayout';
import WatchPageLayout from '../components/layouts/WatchPageLayout';
import GamingPage from '../components/pages/gaming';
import HomePage from '../components/pages/home';
import LoginPage from '../components/pages/login';
import MarketplacePage from '../components/pages/marketplace';
import PageNotFound from '../components/pages/notfound';
import ProfilePage from '../components/pages/profile';
import RegisterPage from '../components/pages/signup';
import WatchPage from '../components/pages/watch';
import { PrivateRoute } from './PrivateRoute';
import {
  GAMING,
  HOME,
  LOGIN,
  MARKETPLACE,
  PROFILE,
  REGISTER,
  WATCH,
} from './routes';

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={REGISTER} element={<RegisterPage />} />

        <Route
          path={HOME}
          element={
            <PrivateRoute layout={HomePageLayout}>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route
          path={WATCH}
          element={
            <PrivateRoute layout={WatchPageLayout}>
              <WatchPage />
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

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
