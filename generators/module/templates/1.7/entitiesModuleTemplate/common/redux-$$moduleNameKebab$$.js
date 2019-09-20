/* eslint-disable import/prefer-default-export */

import * as reduxTables from '@reagentum/front-core/lib/common/app-redux/reducers/app/redux-tables';

import * as api from './api-<%=moduleNameKebab%>';

import redux<%=entityNameCapital%> from './redux-<%=entityNameKebab%>';

export const tableActions = reduxTables.getBindActions({
  /*
    (newMeta, newFilters) => promise
    newMeta: {
      search: PropTypes.string,
      startPage: PropTypes.number,
      itemsPerPage: PropTypes.number,
      sortBy: PropTypes.string,
      sortDesc: PropTypes.bool,
      total: PropTypes.number,
    }
  */
  apiLoadRecords: api.apiFind<%=moduleNameCapital%>,
});

// нету никаких редьюсеров
export default {
  <%=entityNameCamel%>: redux<%=entityNameCapital%>,
};
