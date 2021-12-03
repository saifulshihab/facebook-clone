import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import GamingPageLayout from '../components/layouts/GamingPageLayout';
import HomePageLayout from '../components/layouts/HomePageLayout';
import MarketplacePageLayout from '../components/layouts/MarketplacePage';
import ProfilePageLayout from '../components/layouts/ProfilePageLayout';
import WatchPageLayout from '../components/layouts/WatchPageLayout';
import GamingPage from '../components/pages/gaming';
import HomePage from '../components/pages/home';
import MarketplacePage from '../components/pages/marketplace';
import ProfilePage from '../components/pages/profile';
import WatchPage from '../components/pages/watch';
import { PrivateRoute } from './PrivateRoute';
import { Route } from 'react-router-dom';
import LoginPage from '../components/pages/login';
import PageNotFound from '../components/pages/notfound';

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
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
