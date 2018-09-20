import bind from 'lodash-decorators/bind';

import ParentServerRunner from '@reagentum/front-core/lib/server/CoreServerRunner';
import SubModuleFactory from '@reagentum/front-core/lib/modules/SubModuleFactory';

import { joinPath } from '@reagentum/front-core/lib/common/utils/uri-utils';
import {
  testAppUrlStartWith,
  // getModuleFullPath,
} from '@reagentum/front-core/lib/common/helpers/app-urls';

import ClientRunner from '../client/ClientRunner';

// нужно статически обозначить контекст + необходим regexp без переменных
const serverSubModulesContext = require.context('../modules', true, /^\.\/(.*)\/server\/index\.js/gi);

export default class ServerRunner extends ParentServerRunner {
  loadServerSubModules() {
    return [
      ...super.loadServerSubModules(),
      ...SubModuleFactory.loadSubModules(serverSubModulesContext, SubModuleFactory.SUB_MODULE_TYPES.SERVER),
    ];
  }

  /**
   * класс ClientRunner для серверного рендеринга
   * @returns {ClientRunner}
   */
  createClientRunner() {
    return new ClientRunner();
  }

  getRoutePath(moduleName, path) {
    // return getModuleFullPath(path, moduleName, this.getModuleToRoutePrefixMap());
    return joinPath(this.getModuleRoutePrefix(moduleName), path);
  }

  /**
   *
   * @param pathnameWithoutContextPath
   * @return - default false (все доступно)
   */
  @bind()
  noNeedCredentialsPageMatcher(pathnameWithoutContextPath) {
    // const need = testAppUrlStartWith(
    //   pathnameWithoutContextPath,
    //   this.getRoutePath(moduleProfile.MODULE_NAME, moduleProfile.paths.PATH_PROFILE_SETTINGS),
    // );
    // return !need || super.noNeedCredentialsPageMatcher(pathnameWithoutContextPath);
    return super.noNeedCredentialsPageMatcher(pathnameWithoutContextPath);
  }
}

