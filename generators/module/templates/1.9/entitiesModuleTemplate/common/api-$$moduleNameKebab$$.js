/* eslint-disable import/prefer-default-export */

import { createCrudApi } from '@reagentum/front-core/lib/common/utils/api-utils';

import sendApi from '../../../common/send-api';

export const API_PREFIX = '<%=moduleNameCamel%>';
const crud = createCrudApi(API_PREFIX, sendApi);

export const API_CONFIGS = {
  find<%=moduleNameCapital%>: crud.API_CONFIGS.findRecords,
  create<%=entityNameCapital%>: crud.API_CONFIGS.createRecord,
  read<%=entityNameCapital%>: crud.API_CONFIGS.readRecord,
  update<%=entityNameCapital%>: crud.API_CONFIGS.updateRecord,
  delete<%=entityNameCapital%>: crud.API_CONFIGS.deleteRecord,
};

export const apiFind<%=moduleNameCapital%> = crud.apiFindRecords;
export const apiCreate<%=entityNameCapital%> = crud.apiCreateRecord;
export const apiRead<%=entityNameCapital%> = crud.apiReadRecord;
export const apiUpdate<%=entityNameCapital%> = crud.apiUpdateRecord;
export const apiDelete<%=entityNameCapital%> = crud.apiDeleteRecord;
