import React from 'react';
import { Route } from 'react-router-dom';
import PlayerScore from './containers/PlayerScoreView';
import PlayerDetailView from './containers/PlayerDetailView';


const BaseRouter = () => (
  <div>
    <Route exact path='/' component={PlayerScore} />
    <Route exact path='/:playerID' component={PlayerDetailView} />
  </div>
);

export default BaseRouter;