/* eslint-disable import/prefer-default-export */
import apiConfig from '@reagentum/front-core/lib/common/utils/create-api-config';

import sendApi from '../../../modules/module-core/utils/send-api';

export const API_PREFIX = '<%=moduleNameCamel%>';
export const API_CONFIGS = {
  load<%=moduleNameCapital%>: apiConfig(`/${API_PREFIX}`, 'GET'),
};

export function apiLoad<%=moduleNameCapital%>() {
  return sendApi(API_CONFIGS.load<%=moduleNameCapital%>);
}
