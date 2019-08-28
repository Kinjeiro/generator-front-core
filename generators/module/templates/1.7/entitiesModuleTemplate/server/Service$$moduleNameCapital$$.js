import { objectValues } from '@reagentum/front-core/lib/common/utils/common';

import CoreService from '@reagentum/front-core/lib/server/services/utils/CoreService';

/*
 * Если в serverConfig.server.endpointServices[serviceName] нету используется
 * по умолчанию serverConfig.server.endpointServices.middlewareApiService
 */
export default class Service<%=moduleNameCapital%> extends CoreService {
  async load<%=moduleNameCapital%>(query = {}) {
    // return this.send('/products', query);
    throw new Error('todo');
  }

  async load<%=entityNameCapital%>(id) {
    // return this.sendWithApi(`/products/${id}`);
    throw new Error('todo');
  }

  async add<%=entityNameCapital%>(data) {
    throw new Error('todo');
  }

  async create<%=entityNameCapital%>(data, user) {
    throw new Error('todo');
  }

  async edit<%=entityNameCapital%>(id, data) {
    throw new Error('todo');
  }
}
