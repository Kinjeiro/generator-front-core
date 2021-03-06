import React from 'react';

import { MENU_ITEM_TYPE } from '@reagentum/frontCore_Components/lib/common/models/model-menu';
import { getModuleFullPath } from '@reagentum/front-core/lib/common/helpers/app-urls';

import moduleAuth from '@reagentum/front-core/lib/modules/module-auth/common/subModule';

// import moduleProfile from '../../../modules/module-profile/common';
// import moduleTidings from '../../../modules/module-tidings/common';

import getComponents from '../../get-components';

const {
  UserAvatar,
} = getComponents();

export function getTabsMenu(moduleToRoutePrefixMap) {
  return [
    // {
    //   name: 'новости',
    //   to: getModuleFullPath(moduleTidings.paths.PATH_TIDINGS_INDEX, moduleTidings.MODULE_NAME, moduleToRoutePrefixMap),
    // },
  ];
}

export function getUserProfileUrl(user, moduleToRoutePrefixMap) {
  // return getModuleFullPath(moduleProfile.paths.getPathProfile(user.userId), moduleProfile.MODULE_NAME, moduleToRoutePrefixMap);
  return null;
}

export function getSidebarMenu(userInfo, moduleToRoutePrefixMap) {
  const menu = [];

  if (!userInfo) {
    menu.push(
      {
        name: 'Войти',
        path: moduleAuth.paths.PATH_AUTH_SIGNIN,
        // icon: 'browser',
        mobile: true,
      },
      {
        key: 'delimiter',
        type: MENU_ITEM_TYPE.DELIMITER,
        mobile: true,
      },
    );
  }

  menu.push(...getTabsMenu(moduleToRoutePrefixMap).map((tab) => ({
    ...tab,
    to: undefined,
    path: tab.to,
    mobile: true,
  })));

  return menu;
}

export function getUserMenu(userInfo, moduleToRoutePrefixMap) {
  if (!userInfo) {
    return [];
  }

  const {
    userId,
    computedDisplayName,
  } = userInfo;

  return [
    // {
    //   className: 'UserMenuItem',
    //   name: (
    //     <div className="UserMenuItem__userInfo">
    //       <UserAvatar userId={ userId } />
    //       <div className="UserMenuItem__right">
    //         <div className="UserMenuItem__displayName">
    //           { computedDisplayName }
    //         </div>
    //         <div>
    //           Мой профиль
    //         </div>
    //       </div>
    //     </div>
    //   ),
    //   path: getModuleFullPath(moduleProfile.paths.PATH_PROFILE_INDEX, moduleProfile.MODULE_NAME, moduleToRoutePrefixMap),
    // },
    // {
    //   name: 'Настройки',
    //   path: getModuleFullPath(moduleProfile.paths.PATH_PROFILE_SETTINGS, moduleProfile.MODULE_NAME, moduleToRoutePrefixMap),
    //   // icon: 'browser',
    // },
  ];
}
