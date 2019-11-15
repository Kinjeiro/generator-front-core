import { objectValues } from '@reagentum/front-core/lib/common/utils/common';

import CoreServiceMock from '@reagentum/front-core/lib/server/services/utils/CoreServiceMock';

export const <%=moduleNameUpper%> = {
  ID1: { id: 'ID1', name: 'Тестовая запись 1', attachments: [] },
  ID2: { id: 'ID2', name: 'Тестовая запись 2', attachments: [] },
};

export default class Service<%=moduleNameCapital%>Mock extends CoreServiceMock {
  serviceName = 'Service<%=moduleNameCapital%>Mock';

  async getData() {
    return <%=moduleNameUpper%>;
  }
}
