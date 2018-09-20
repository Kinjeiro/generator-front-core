import apiPluginFactory from '@reagentum/front-core/lib/server/utils/api-plugin-factory';

import { API_CONFIGS } from '../common/api-<%=moduleNameKebab%>';

export default function getServerApi() {
  return [
    apiPluginFactory(
      API_CONFIGS.load<%=moduleNameCapital%>,
      async (query, request, reply) => {
        const {
          user: {
            username,
          },
        } = request;
        return reply(request.services.service<%=moduleNameCapital%>.load<%=moduleNameCapital%>(username, query));
      },
    ),

    apiPluginFactory(
      API_CONFIGS.load<%=entityNameCapital%>,
      async (requestData, request, reply) => {
        const {
          params: {
            id,
          },
          services: {
            serviceUsers,
          },
        } = request;
        const <%=entityName%> = await request.services.service<%=moduleNameCapital%>.load<%=entityNameCapital%>(id);
        return reply(<%=entityName%>);
      },
    ),
  ];
}
