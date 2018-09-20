import React from 'react';
import {
  Route,
  IndexRedirect,
  IndexRoute,
  // Redirect,
} from 'react-router';
import * as paths from './routes-paths-<%=moduleNameKebab%>';

import <%=moduleNameCapital%>Page from './<%=moduleNameCapital%>Page/<%=moduleNameCapital%>Page';
import <%=entityNameCapital%>Page from './<%=entityNameCapital%>Page/<%=entityNameCapital%>Page';

export default (
  <Route path="">
    <IndexRoute
      component={ <%=moduleNameCapital%>Page }
    />
    <Route
      path={ `:${paths.PATH_PARAM_<%=entityNameUpper%>_ID}` }
      component={ <%=entityNameCapital%>Page }
    />
  </Route>
);
