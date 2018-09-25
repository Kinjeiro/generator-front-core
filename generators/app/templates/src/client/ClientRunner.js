/* eslint-disable global-require,no-param-reassign,max-len */
import ParentClientRunner from '@reagentum/frontCore_Components/lib/client/ClientRunner';

import { initComponents } from '../common/get-components';
import { initComponents as toCoreInitComponents } from '../module-to-front-core/common/get-components';

export default class ClientRunner extends ParentClientRunner {
  loadCommonSubModulesContexts() {
    return [
      ...super.loadCommonSubModulesContexts(),
      require.context('../modules', true, /^\.\/(.*)\/common\/index\.js/gi),
    ];
  }

  initComponents(COMPONENTS_BASE) {
    super.initComponents(COMPONENTS_BASE);
    toCoreInitComponents(COMPONENTS_BASE);
    return initComponents(COMPONENTS_BASE);
  }

  // ROUTING
  getProjectLayoutComponent() {
    return this.getComponents().ProjectApp;
  }
  getIndexRoute() {
    return this.getComponents().Landing;
  }

  // /**
  //  * @override
  //  */
  // getApiClientClass() {
  //   /**
  //    * Специальный хедар для прокси (OAM) перед weblogic для аутентификации пользователя
  //    *
  //    * мы ее кладем в userInfo.username
  //    * @type {string}
  //    */
  //   const HEADER_SAUID = 'SAUID';
  //
  //   const SuperClass = super.getApiClientClass();
  //   class NewClass extends SuperClass {
  //     parseOptions(requestOptions) {
  //       const { username } = this.getUserInfo();
  //       if (!requestOptions.headers) {
  //         requestOptions.headers = {};
  //       }
  //       requestOptions.headers[HEADER_SAUID] = username;
  //       return requestOptions;
  //     }
  //   }
  //   return NewClass;
  // }
}
