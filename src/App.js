import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from 'Pages/About';
import Start from 'Pages/Start';
import Horses from 'Pages/Horses';
import Horse from 'Pages/Horse';
import Page404 from 'Pages/404';
import { withLightLayout, withDarkLayout, withErrorLayout } from 'Utils/Layout';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={withLightLayout(Start)} />
      <Route exact path='/horses' component={withLightLayout(Horses)} />
      <Route path='/horse/:slug' component={withLightLayout(Horse)} />
      {/* <Route path='/competition' render={withLightLayout(About)} />
      <Route path='/admin' render={withDarkLayout(About)} /> */}
      <Route path='*' component={withErrorLayout(Page404)} />
    </Switch>
  );
}

export default App;
