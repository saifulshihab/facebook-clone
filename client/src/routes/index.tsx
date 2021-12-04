import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          exact={true}
          path="/"
          component={HomePage}
          layout={HomePageLayout}
        />
        <PrivateRoute
          exact={true}
          path="/watch"
          component={WatchPage}
          layout={WatchPageLayout}
        />
        <PrivateRoute
          exact={true}
          path="/marketplace"
          component={MarketplacePage}
          layout={MarketplacePageLayout}
        />
        <PrivateRoute
          exact={true}
          path="/gaming"
          component={GamingPage}
          layout={GamingPageLayout}
        />
        <PrivateRoute
          exact={true}
          path="/profile"
          component={ProfilePage}
          layout={ProfilePageLayout}
        />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
