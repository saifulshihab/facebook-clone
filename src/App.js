import React from 'react';
import './styles/main.css';
import Navbar from './Components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProfileScreen from './Components/Profile/ProfileScreen';
import GamingScreen from './Components/Gaming/GamingScreen';
import MarketPlaceScreen from './Components/Marketplace/MarketPlaceScreen';
import GroupScreen from './Components/Groups/GroupScreen';
import WatchScreen from './Components/Watch/WatchScreen';
import HomeScreen from './Components/Home/HomeScreen';

function App() {
  return (
    <div className='w-screen min-h-screen bg-gray-100'>
      <Navbar />
      <div className='w-full h-full bg-gray-100'>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/watch' component={WatchScreen} />
          <Route path='/marketplace' component={MarketPlaceScreen} />
          <Route path='/gaming' component={GamingScreen} />
          <Route path='/groups' component={GroupScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Redirect to='/' />
        </Switch>
      </div>
    </div>
  );
}

export default App;
