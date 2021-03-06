import SubModuleFactory from '@reagentum/front-core/lib/modules/SubModuleFactory';

import MODULE_NAME from './module-name';
import * as paths from './routes-paths-<%=moduleNameKebab%>';
// import { initComponents } from './get-components';

export default SubModuleFactory.createCommonSubModule({
  MODULE_NAME,
  paths,
  initComponents: (CB) => require('./get-components').initComponents(CB),

  getRoutes: (...args) => require('./routes-<%=moduleNameKebab%>').default(...args),
  getApi: () => require('./api-<%=moduleNameKebab%>'),
  getRootReducers: () => require('./redux-<%=moduleNameKebab%>').default,

  hotReloadFunc: (reloadUi, reloadStore, reloadAll) => {
    module.hot.accept('./routes-<%=moduleNameKebab%>', reloadUi);
    module.hot.accept('./api-<%=moduleNameKebab%>', reloadAll);
    module.hot.accept('./redux-<%=moduleNameKebab%>', reloadStore);
    module.hot.accept('./get-components', reloadUi);
  },
});
