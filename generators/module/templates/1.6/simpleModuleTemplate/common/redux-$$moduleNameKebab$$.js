/* eslint-disable max-len */
import { createReducer } from '@reagentum/front-core/lib/common/app-redux/utils';
import { createStatusReducer } from '@reagentum/front-core/lib/common/app-redux/helpers';

import * as api from './api-<%=moduleNameKebab%>';

// ======================================================
// INITIAL STATE
// ======================================================
const initialState = {
  anyData: undefined,

  actionLoad<%=moduleNameCapital%>Status: undefined,
};


// ======================================================
// TYPES
// ======================================================
const PREFIX = '<%=moduleNameCamel%>';
export const TYPES = {
  LOAD_<%=moduleNameUpper%>_FETCH:     `${PREFIX}/LOAD_<%=moduleNameUpper%>_FETCH`,
  LOAD_<%=moduleNameUpper%>_SUCCESS:   `${PREFIX}/LOAD_<%=moduleNameUpper%>_SUCCESS`,
  LOAD_<%=moduleNameUpper%>_FAIL:      `${PREFIX}/LOAD_<%=moduleNameUpper%>_FAIL`,
};


// ======================================================
// ACTION CREATORS
// ======================================================
export function getBindActions({
  apiLoad<%=moduleNameCapital%>,
}) {
  return {
    actionLoad<%=moduleNameCapital%>() {
      return {
        types: [TYPES.LOAD_<%=moduleNameUpper%>_FETCH, TYPES.LOAD_<%=moduleNameUpper%>_SUCCESS, TYPES.LOAD_<%=moduleNameUpper%>_FAIL],
        payload: apiLoad<%=moduleNameCapital%>(),
      };
    },
  };
}

export const actions = getBindActions(api);

// ======================================================
// REDUCER
// ======================================================
const reducer = createReducer(
  initialState,
  {
    [TYPES.LOAD_<%=moduleNameUpper%>_SUCCESS]:
      (state, action, anyData) => ({
        ...state,
        anyData,
      }),
  },
  {
    actionLoad<%=moduleNameCapital%>Status: createStatusReducer(
      TYPES.LOAD_<%=moduleNameUpper%>_FETCH, TYPES.LOAD_<%=moduleNameUpper%>_SUCCESS, TYPES.LOAD_<%=moduleNameUpper%>_FAIL,
    ),
  },
);

// нету никаких редьюсеров
export default {
  <%=moduleNameCamel%>: reducer,
};
