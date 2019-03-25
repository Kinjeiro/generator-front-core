import MODULE_NAME from './module-name';
import { initComponents } from './get-components';

export default {
  MODULE_NAME,
  initComponents,

  hotReloadFunc: (reloadUi, reloadStore, reloadAll) => {
    module.hot.accept('./get-components', reloadUi);
  },
};
