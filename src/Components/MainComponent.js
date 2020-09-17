import React from 'react';
import Header from './Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Profile from './ProfileComponent';
import Home from './HomeComponent';
import Watch from './WatchComponent';
import Groups from './GroupComponent';
import Gaming from './GamingComponent';

function Main() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/watch" component={Watch} />
        <Route exact path="/groups" component={Groups} />
        <Route exact path="/gaming" component={Gaming} />
        <Route exact path="/profile" component={Profile} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
}

export default Main;
