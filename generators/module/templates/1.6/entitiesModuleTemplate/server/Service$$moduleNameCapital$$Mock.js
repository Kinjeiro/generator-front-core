import { objectValues } from '@reagentum/front-core/lib/common/utils/common';

import CoreServiceMock from '@reagentum/front-core/lib/server/services/utils/CoreServiceMock';

export const <%=moduleNameUpper%> = {
  ID1: { id: 'ID1', name: 'Тестовая запись 1', attachments: [] },
  ID2: { id: 'ID2', name: 'Тестовая запись 2', attachments: [] },
};

export default class Service<%=moduleNameCapital%>Mock extends CoreServiceMock {
  async getData() {
    return <%=moduleNameUpper%>;
  }

  async load<%=moduleNameCapital%>(query = {}) {
    return this.loadRecords(query);
  }

  async load<%=entityNameCapital%>(id) {
    return this.loadRecord(id);
  }

  async add<%=entityNameCapital%>(data) {
    return this.addRecord(data);
  }

  async create<%=entityNameCapital%>(data, user) {
    const {
      userId,
      displayName,
    } = user;

    return this.addRecord({
      ...data,
    });
  }

  async edit<%=entityNameCapital%>(id, data) {
    return this.editRecord(id, data);
  }
}
