import React from 'react';
import {
  Route,
  IndexRedirect,
  IndexRoute,
  // Redirect,
} from 'react-router';
import * as paths from './routes-paths-<%=moduleNameKebab%>';

import getComponents from './get-components';

export default function getRoute() {
  const {
    <%=moduleNameCapital%>Page,
  } = getComponents();

  return (
    <Route
      path=""
      component={ <%=moduleNameCapital%>Page }
    >
    </Route>
  );
}

