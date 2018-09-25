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
    <%=moduleNameCapital%>Layout,
    <%=moduleNameCapital%>Page,
    <%=entityNameCapital%>Page,
    <%=entityNameCapital%>NewPage,
  } = getComponents();

  return (
    <Route
      path=""
      component={ <%=moduleNameCapital%>Layout }
    >
      <IndexRoute
        component={ <%=moduleNameCapital%>Page }
      />

      <Route
        path={ paths.ROUTES_NAMES.new }
        component={ <%=entityNameCapital%>NewPage }
      />

      <Route
        path={ `:${paths.PATH_PARAM_<%=entityNameUpper%>_ID}` }
      >
        <IndexRoute
          component={ <%=entityNameCapital%>Page }
        />
        <Route
          path={ paths.ROUTES_NAMES.edit }
          component={ <%=entityNameCapital%>NewPage }
        />
      </Route>
    </Route>
  );
}

