import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from 'Pages/About';
import Start from 'Pages/Start';
import Horses from 'Pages/Horses';
import Horse from 'Pages/Horse';
import { withLightLayout, withDarkLayout } from 'Utils/Layout';

function App() {
  return (
    <Switch>
      <Route exact path='/' render={withLightLayout(Start)} />
      <Route exact path='/horses' render={withLightLayout(Horses)} />
      <Route path='/horse/:slug' render={withLightLayout(Horse)} />
      {/* <Route path='/competition' render={withLightLayout(About)} />
      <Route path='/admin' render={withDarkLayout(About)} /> */}
      <Route path='*' render={() => 'Path Not Found'} />
    </Switch>
  );
}

export default App;
