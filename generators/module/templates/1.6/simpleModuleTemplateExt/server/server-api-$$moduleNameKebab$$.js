import apiPluginFactory from '@reagentum/front-core/lib/server/utils/api-plugin-factory';

import { API_CONFIGS } from '../common/api-<%=moduleNameKebab%>';

export default function getServerApi() {
  return [
    apiPluginFactory(
      API_CONFIGS.load<%=moduleNameCapital%>,
      async (requestData, request, reply) => {
        const {
          user: {
            userId,
          },
          services: {
            service<%=moduleNameCapital%>,
          },
        } = request;
        return reply(service<%=moduleNameCapital%>.findRecordsWithPagination(requestData));
      },
    ),
  ];
}
