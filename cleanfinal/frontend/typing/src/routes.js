import React from 'react';
import { Route } from 'react-router-dom';

import PlayerScore from './containers/PlayerScoreView';
import PlayerDetailView from './containers/PlayerDetailView';

import LoginForm from './containers/Login';
import SignupForm from './containers/Register';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={PlayerScore} />
    <Route exact path='/players/:playerID/' component={PlayerDetailView} />
    <Route exact path='/login/' component={LoginForm} />
    <Route exact path='/signup/' component={SignupForm} />
  </div>
);

export default BaseRouter;