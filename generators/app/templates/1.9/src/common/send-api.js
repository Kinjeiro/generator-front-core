import getApiClientInner from '@reagentum/front-core/lib/common/helpers/get-api-client';

export const getApiClient = getApiClientInner;

export default function api(...params) {
  return getApiClient().api(...params);
}
