import React from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Profile from './Profile/ProfileComponent';
import Home from './Home/HomeComponent';
import Watch from './Watch/WatchComponent';
import Groups from './Group/GroupComponent';
import Gaming from './Gaming/GamingComponent';

function Main() {
  return (
    <>
      <div id="maincomponent">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/watch" component={Watch} />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/profile" component={Profile} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}

export default withRouter(Main);
