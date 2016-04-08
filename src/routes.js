import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import BMCPage from './containers/BMCPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BMCPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
