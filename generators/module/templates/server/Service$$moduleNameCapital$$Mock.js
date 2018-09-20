import { objectValues } from '@reagentum/front-core/lib/common/utils/common';

import CoreServiceMock from '@reagentum/front-core/lib/server/services/utils/CoreServiceMock';

export const <%=moduleNameUpper%> = {
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
}
