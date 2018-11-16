/* eslint-disable import/prefer-default-export */

import * as reduxTables from '@reagentum/front-core/lib/common/app-redux/reducers/app/redux-tables';

import * as api from './api-<%=moduleNameKebab%>';

import redux<%=entityNameCapital%> from './redux-<%=entityNameKebab%>';

export const tableActions = reduxTables.getBindActions({
  apiLoadRecords: api.apiLoad<%=moduleNameCapital%>,
});

// нету никаких редьюсеров
export default {
  <%=entityNameCamel%>: redux<%=entityNameCapital%>,
};
