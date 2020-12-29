import React from 'react';
import { Route } from 'react-router-dom';

import PlayerDetailView from './containers/PlayerDetailView';
import HomeView from './components/Home';

import TypingGame from './containers/TypingGame';
import LoginForm from './containers/Login';
import SignupForm from './containers/Register';

import Test from './containers/Test';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={HomeView} />
    <Route exact path='/players/:playerID/' component={PlayerDetailView} />
    <Route exact path='/login/' component={LoginForm} />
    <Route exact path='/signup/' component={SignupForm} />
    <Route exact path="/test/" component={Test} />
    <Route exact path="/typing/" component={TypingGame} />
  </div>
);

export default BaseRouter;