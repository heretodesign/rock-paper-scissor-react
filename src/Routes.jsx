import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SelectGame from './pages/SelectGame';
import PlayerPCGameMode from './pages/PlayerPCGameMode';
import ComputerGameMode from './pages/ComputerGameMode';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SelectGame} />
        <Route
          path="/player-vs-computer-game-mode"
          exact
          component={PlayerPCGameMode}
        />
        <Route
          exact
          path="/laptop-vs-desktop-game-mode"
          component={ComputerGameMode}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
