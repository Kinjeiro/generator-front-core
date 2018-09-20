/* eslint-disable import/prefer-default-export */

import * as reduxTables from '@reagentum/front-core/lib/common/app-redux/reducers/app/redux-tables';

import * as api from './api-<%=moduleNameKebab%>';

export const actions = reduxTables.getBindActions({
  apiLoadRecords: api.apiLoad<%=moduleNameCapital%>,
});

// нету никаких редьюсеров
export default {};
