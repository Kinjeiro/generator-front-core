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
        return reply(request.services.service<%=moduleNameCapital%>.load<%=moduleNameCapital%>(query));
      },
    ),

    apiPluginFactory(
      API_CONFIGS.load<%=entityNameCapital%>,
      async (requestData, request, reply) => {
        const {
          params: {
            id,
          },
        } = request;
        const <%=entityName%> = await request.services.service<%=moduleNameCapital%>.load<%=entityNameCapital%>(id);
        return reply(<%=entityName%>);
      },
    ),

    apiPluginFactory(
      API_CONFIGS.create<%=entityNameCapital%>,
      async (requestData, request, reply) => {
        const { user } = request;
        return reply(request.services.service<%=moduleNameCapital%>.create<%=entityNameCapital%>(requestData, user));
      },
    ),

    apiPluginFactory(
      API_CONFIGS.edit<%=entityNameCapital%>,
      async (requestData, request, reply) => {
        const {
          params: {
            id,
          },
        } = request;
        return reply(request.services.service<%=moduleNameCapital%>.edit<%=entityNameCapital%>(id, requestData));
      },
    ),
  ];
}
