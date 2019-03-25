import { objectValues } from '@reagentum/front-core/lib/common/utils/common';

import CoreService from '@reagentum/front-core/lib/server/services/utils/CoreService';

export default class Service<%=moduleNameCapital%> extends CoreService {
  async load<%=moduleNameCapital%>(query = {}) {
    throw new Error('todo');
  }

  async load<%=entityNameCapital%>(id) {
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
