import SubModuleFactory from '@reagentum/front-core/lib/modules/SubModuleFactory';

import getServerApi from './server-api-<%=moduleNameKebab%>';
import Service<%=moduleNameCapital%>Mock from './Service<%=moduleNameCapital%>Mock';

export default SubModuleFactory.createServerSubModule({
  getServerApi,
  // getServerServices: (endpoints) => ({
  //   service<%=moduleNameCapital%>:
  // }),
  getServerMockServices: () => ({
    service<%=moduleNameCapital%>: Service<%=moduleNameCapital%>Mock,
  }),
});
