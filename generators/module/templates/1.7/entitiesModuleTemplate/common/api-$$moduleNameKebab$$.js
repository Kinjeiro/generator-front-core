/* eslint-disable import/prefer-default-export */

import { createCrudApi } from '@reagentum/front-core/lib/common/utils/api-utils';

import sendApi from '../../module-core/utils/send-api';

export const API_PREFIX = '<%=moduleNameCamel%>';
const crud = createCrudApi(API_PREFIX, sendApi);

export const API_CONFIGS = {
  load<%=moduleNameCapital%>: crud.API_CONFIGS.loadRecords,
  create<%=entityNameCapital%>: crud.API_CONFIGS.createRecord,
  load<%=entityNameCapital%>: crud.API_CONFIGS.readRecord,
  edit<%=entityNameCapital%>: crud.API_CONFIGS.updateRecord,
  delete<%=entityNameCapital%>: crud.API_CONFIGS.deleteRecord,
};

export const apiLoad<%=moduleNameCapital%> = crud.apiLoadRecords;
export const apiCreate<%=entityNameCapital%> = crud.apiCreateRecord;
export const apiLoad<%=entityNameCapital%> = crud.apiReadRecord;
export const apiEdit<%=entityNameCapital%> = crud.apiUpdateRecord;
export const apiDelete<%=entityNameCapital%> = crud.apiDeleteRecord;
