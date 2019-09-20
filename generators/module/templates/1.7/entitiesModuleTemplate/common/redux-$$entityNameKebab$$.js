/* eslint-disable max-len */
import { createReducer } from '@reagentum/front-core/lib/common/app-redux/utils';
import { createStatusReducer } from '@reagentum/front-core/lib/common/app-redux/helpers';

import * as api from './api-<%=moduleNameKebab%>';

// ======================================================
// INITIAL STATE
// ======================================================
const initialState = {
  <%=entityNameCamel%>: null,
  actionLoad<%=entityNameCapital%>Status: undefined,
  actionCreate<%=entityNameCapital%>Status: undefined,
  actionEdit<%=entityNameCapital%>Status: undefined,
};


// ======================================================
// TYPES
// ======================================================
const PREFIX = '<%=entityNameCamel%>';
export const TYPES = {
  LOAD_<%=entityNameUpper%>_FETCH:     `${PREFIX}/LOAD_<%=entityNameUpper%>_FETCH`,
  LOAD_<%=entityNameUpper%>_FAIL:      `${PREFIX}/LOAD_<%=entityNameUpper%>_FAIL`,
  LOAD_<%=entityNameUpper%>_SUCCESS:   `${PREFIX}/LOAD_<%=entityNameUpper%>_SUCCESS`,

  CREATE_<%=entityNameUpper%>_FETCH:     `${PREFIX}/CREATE_<%=entityNameUpper%>_FETCH`,
  CREATE_<%=entityNameUpper%>_SUCCESS:   `${PREFIX}/CREATE_<%=entityNameUpper%>_SUCCESS`,
  CREATE_<%=entityNameUpper%>_FAIL:      `${PREFIX}/CREATE_<%=entityNameUpper%>_FAIL`,

  EDIT_<%=entityNameUpper%>_FETCH:     `${PREFIX}/EDIT_<%=entityNameUpper%>_FETCH`,
  EDIT_<%=entityNameUpper%>_SUCCESS:   `${PREFIX}/EDIT_<%=entityNameUpper%>_SUCCESS`,
  EDIT_<%=entityNameUpper%>_FAIL:      `${PREFIX}/EDIT_<%=entityNameUpper%>_FAIL`,

  CLEAR_<%=entityNameUpper%>: `${PREFIX}/CLEAR_<%=entityNameUpper%>`,
};


// ======================================================
// ACTION CREATORS
// ======================================================
export function getBindActions({
  apiCreate<%=entityNameCapital%>,
  apiRead<%=entityNameCapital%>,
  apiUpdate<%=entityNameCapital%>,
}) {
  return {
    actionLoad<%=entityNameCapital%>(<%=entityNameCamel%>Id) {
      return {
        types: [TYPES.LOAD_<%=entityNameUpper%>_FETCH, TYPES.LOAD_<%=entityNameUpper%>_SUCCESS, TYPES.LOAD_<%=entityNameUpper%>_FAIL],
        payload: apiRead<%=entityNameCapital%>(<%=entityNameCamel%>Id),
      };
    },
    actionCreate<%=entityNameCapital%>(<%=entityNameCamel%>Data, filesMap = null) {
      return {
        types: [TYPES.CREATE_<%=entityNameUpper%>_FETCH, TYPES.CREATE_<%=entityNameUpper%>_SUCCESS, TYPES.CREATE_<%=entityNameUpper%>_FAIL],
        payload: apiCreate<%=entityNameCapital%>(<%=entityNameCamel%>Data, filesMap),
      };
    },
    actionEdit<%=entityNameCapital%>(id, <%=entityNameCamel%>Data) {
      return {
        types: [TYPES.EDIT_<%=entityNameUpper%>_FETCH, TYPES.EDIT_<%=entityNameUpper%>_SUCCESS, TYPES.EDIT_<%=entityNameUpper%>_FAIL],
        payload: apiUpdate<%=entityNameCapital%>(id, <%=entityNameCamel%>Data),
      };
    },
    actionClear<%=entityNameCapital%>() {
      return {
        type: TYPES.CLEAR_<%=entityNameUpper%>,
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
    [TYPES.LOAD_<%=entityNameUpper%>_SUCCESS]:
      '<%=entityNameCamel%>',
    [TYPES.CREATE_<%=entityNameUpper%>_SUCCESS]:
      '<%=entityNameCamel%>',
    [TYPES.EDIT_<%=entityNameUpper%>_SUCCESS]:
      '<%=entityNameCamel%>',
    [TYPES.CLEAR_<%=entityNameUpper%>]:
      () => reducer(),
  },
  {
    actionLoad<%=entityNameCapital%>Status: createStatusReducer(
      TYPES.LOAD_<%=entityNameUpper%>_FETCH, TYPES.LOAD_<%=entityNameUpper%>_SUCCESS, TYPES.LOAD_<%=entityNameUpper%>_FAIL,
    ),
    actionCreate<%=entityNameCapital%>Status: createStatusReducer(
      TYPES.CREATE_<%=entityNameUpper%>_FETCH, TYPES.CREATE_<%=entityNameUpper%>_SUCCESS, TYPES.CREATE_<%=entityNameUpper%>_FAIL
    ),
    actionEdit<%=entityNameCapital%>Status: createStatusReducer(
      TYPES.EDIT_<%=entityNameUpper%>_FETCH, TYPES.EDIT_<%=entityNameUpper%>_SUCCESS, TYPES.EDIT_<%=entityNameUpper%>_FAIL
    ),
  },
);

export default reducer;
