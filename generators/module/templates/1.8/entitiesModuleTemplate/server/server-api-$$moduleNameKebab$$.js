import apiPluginFactory from '@reagentum/front-core/lib/server/utils/api-plugin-factory';

import { API_CONFIGS } from '../common/api-<%=moduleNameKebab%>';

export default function getServerApi() {
  return [
    apiPluginFactory(
      API_CONFIGS.find<%=moduleNameCapital%>,
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

    apiPluginFactory(
      API_CONFIGS.read<%=entityNameCapital%>,
      async (requestData, request, reply) => {
        const {
          params: {
            id,
          },
          services: {
            service<%=moduleNameCapital%>,
          },
        } = request;
        return reply(service<%=moduleNameCapital%>.readRecord(id));
      },
    ),

    apiPluginFactory(
      API_CONFIGS.create<%=entityNameCapital%>,
      async (requestData, request, reply) => {
        const {
          user,
          services: {
            service<%=moduleNameCapital%>,
          },
        } = request;
        return reply(service<%=moduleNameCapital%>.createRecord(requestData));
      },
    ),

    apiPluginFactory(
      API_CONFIGS.update<%=entityNameCapital%>,
      async (requestData, request, reply) => {
        const {
          params: {
            id,
          },
          services: {
            service<%=moduleNameCapital%>,
          },
        } = request;
        return reply(service<%=moduleNameCapital%>.updateRecord(id, requestData));
      },
    ),

    apiPluginFactory(
      API_CONFIGS.delete<%=entityNameCapital%>,
      async (requestData, request, reply) => {
        const {
          params: {
            id,
          },
          services: {
            service<%=moduleNameCapital%>,
          },
        } = request;
        return reply(service<%=moduleNameCapital%>.deleteRecord(id));
      },
    ),
  ];
}
