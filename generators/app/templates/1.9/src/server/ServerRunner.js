import bind from 'lodash-decorators/bind';

import SubModuleFactory from '@reagentum/front-core/lib/modules/SubModuleFactory';

import { joinPath } from '@reagentum/front-core/lib/common/utils/uri-utils';
import {
  testAppUrlStartWith,
  // getModuleFullPath,
} from '@reagentum/front-core/lib/common/helpers/app-urls';

import ParentServerRunner from '@reagentum/frontCore_Components/lib/server/ServerRunner';

// import moduleLanding from '../modules/module-landing/common';
// import moduleRegister from '../modules/module-register/common';

import ClientRunner from '../client/ClientRunner';

import preLoader from './pre-loader';

export default class ServerRunner extends ParentServerRunner {
  loadServerSubModules() {
    return [
      ...super.loadServerSubModules(),
      ...SubModuleFactory.loadSubModules(
        require.context('../modules', true, /^\.\/(.*)\/server\/index\.js/gi),
        SubModuleFactory.SUB_MODULE_TYPES.SERVER
      ),
    ];
  }

  /**
   * класс ClientRunner для серверного рендеринга
   * @returns {ClientRunner}
   */
  createClientRunner() {
    return new ClientRunner();
  }

  getPreLoader() {
    return preLoader;
  }

  getRoutePath(moduleName, path) {
    // return getModuleFullPath(path, moduleName, this.getModuleToRoutePrefixMap());
    const modulePrefix = this.getModuleRoutePrefix(moduleName);
    return path !== '/'
      ? joinPath(modulePrefix, path)
      : modulePrefix;
  }

  /**
   *
   * @param pathnameWithoutContextPath
   * @return - default false (все доступно)
   */
  @bind()
  noNeedCredentialsPageMatcher(pathnameWithoutContextPath) {
    // const noNeed =
    //   pathnameWithoutContextPath === '/' // index
    //   || testAppUrlStartWith(
    //   pathnameWithoutContextPath,
    //   this.getRoutePath(moduleLanding.MODULE_NAME, moduleLanding.paths.PATH_LANDING_INDEX),
    //   this.getRoutePath(moduleRegister.MODULE_NAME, moduleRegister.paths.PATH_REGISTER_INDEX),
    //   );
    //
    // return noNeed || super.noNeedCredentialsPageMatcher(pathnameWithoutContextPath);
    return super.noNeedCredentialsPageMatcher(pathnameWithoutContextPath);
  }
}

