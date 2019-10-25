/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import bind from 'lodash-decorators/bind';

import contextModules from '@reagentum/front-core/lib/common/contexts/ContextModules/decorator-context-modules';
import { getUserId } from '@reagentum/front-core/lib/modules/module-auth/common/subModule/redux-selectors';
import { MENU_ITEM_TYPE } from '@reagentum/front-core/lib/modules/feature-ui-basic/common/subModule/model-ui-menu';

import moduleFeatureSidebar from '@reagentum/frontCore_Components/lib/modules/feature-ui-sidebar/common';

// import moduleProducts from '../../../modules/module-products/common';

import i18n from '../../i18n';

import getComponents from '../../get-components';

// import './ProjectApp.scss';

const {
  AppLayout,
  MediaQuery,
  UserAvatar,
  TabsLayout,
  Footer,
  Link,

  // CookieTermPopup
} = getComponents();

// так как мы подгружаем модуль AppLayout onDemand то стили нужно подгрузить позже, а не при импорте
require('./ProjectApp.scss');

@contextModules()
@connect(
  globalState => ({
    userId: getUserId(globalState),
  }),
  {
    ...moduleFeatureSidebar.reduxActions(),
  },
)
export default class ProjectApp extends Component {
  static propTypes = {
    // ======================================================
    // PROPS
    // ======================================================
    children: PropTypes.node,

    // ======================================================
    // @contextModules
    // ======================================================
    getRoutePath: PropTypes.func,
    getFullPath: PropTypes.func,
    onGoTo: PropTypes.func,

    // ======================================================
    // @connect
    // ======================================================
    // ...AppLayout.propTypes,
    userId: PropTypes.string,
    actionCloseSidebar: PropTypes.func,
    actionChangeSidebarContext: PropTypes.func,

    router: PropTypes.object,
  };

  state = {
  };

  // ======================================================
  // MENU
  // ======================================================
  @bind()
  getTabsMenu() {
    const {
      getRoutePath,
    } = this.props;

    return [
      // {
      //   name: 'товары',
      //   to: getRoutePath(
      //     moduleProducts.paths.PATH_PRODUCTS_GOOD,
      //     moduleProducts.MODULE_NAME,
      //   ),
      // },
    ];
  }

  @bind()
  getUserProfileUrl(user) {
    // const {
    //   getRoutePath,
    // } = this.props;
    // return getRoutePath(
    //   moduleProfile.paths.getPathProfile(user.aliasId || user.userId),
    //   moduleProfile.MODULE_NAME,
    // );
    return null;
  }

  @bind()
  getSidebarMenu(userInfo) {
    const {
      getRoutePath,
      onGoTo,
      actionChangeSidebarContext,
      actionCloseSidebar,
    } = this.props;

    const menu = [];

    if (!userInfo) {
      menu.push(
        {
          name: <Link checkAuth={ true }>Войти</Link>,
          className: 'ProjectApp__signinMenuItem',
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

    menu.push(...this.getTabsMenu().map((tab) => ({
      ...tab,
      to: undefined,
      path: tab.to,
      mobile: true,
    })));

    // menu.push(
    //   {
    //     name: 'проекты',
    //     path: getRoutePath(
    //       moduleCharities.paths.PATH_CHARITIES_INDEX,
    //       moduleCharities.MODULE_NAME,
    //     ),
    //     mobile: true,
    //     onClick: () =>
    //       onGoTo(
    //        moduleCharities.paths.PATH_CHARITIES_INDEX,
    //        moduleCharities.MODULE_NAME,
    //       ),
    //   },
    // );

    return menu;
  }

  @bind()
  getUserMenu(userInfo) {
    const {
      getRoutePath,
    } = this.props;

    if (!userInfo) {
      return [];
    }

    const {
      userId,
      displayName,
      aliasId,
      username,
      email,
      // profileImageURI,
    } = userInfo;

    const displayNameFinal = displayName || username || aliasId || email || userId;

    // todo @ANKU @LOW - можно вынести в отдельный компонент
    return [
      // {
      //   className: 'UserMenuItem',
      //   name: (
      //     <div className="UserMenuItem__userInfo">
      //       <UserAvatar userId={ userId } />
      //       <div className="UserMenuItem__right">
      //         <div className="UserMenuItem__displayName">
      //          {displayNameFinal}
      //         </div>
      //         <div>Мой профиль</div>
      //       </div>
      //     </div>
      //   ),
      //   path: getRoutePath(
      //     moduleProfile.paths.PATH_PROFILE_INDEX,
      //     moduleProfile.MODULE_NAME,
      //   ),
      // },
      // {
      //   name: 'Настройки',
      //   path: getRoutePath(
      //     moduleSettings.paths.PATH_SETTINGS_INDEX,
      //     moduleSettings.MODULE_NAME,
      //   ),
      //   // icon: 'browser',
      // },
    ];
  }

  // ======================================================
  // HANDLERS
  // ======================================================
  // @bind()

  // ======================================================
  // MAIN RENDER
  // ======================================================
  render() {
    const {
      children,
    } = this.props;

    return (
      <div className="ProjectApp">
        <AppLayout
          { ...this.props }
          textTitle={ i18n('pages.AppLayout.title') }
          userMenu={ this.getUserMenu }
          sidebarMenu={ this.getSidebarMenu }
          ifMobileMoveUserMenuToSidebar={ false }
          headerProps={{
            headerTitle: i18n('pages.AppLayout.Header.title'),
            headerDescription: i18n('pages.AppLayout.Header.description'),

            // leftPart: (
            //   <MediaQuery minSize={ MediaQuery.SIZES.TABLET }>
            //     {matcher =>
            //       matcher && (
            //         <div className="ProjectApp__searchWrapper">
            //           <button className="ProjectApp__radio" onClick={ this.handleCloseRadio }>
            //             <RadioIcon className="ProjectApp__radio-image" />
            //           </button>
            //           <MediaQuery minSize={ MediaQuery.SIZES.DESKTOP }>
            //             <SearchProduct { ...this.props } className="ProjectApp__searchInHeader" />
            //           </MediaQuery>
            //         </div>
            //       )
            //     }
            //   </MediaQuery>
            // ),
            profileUrl: this.getUserProfileUrl,
            // rightPart: <BasketHeader key={ userId || '1' } />,
          }}
          sidebarProps={{
            inverted: false,
          }}
          upBottomButtonsProps={ true }
          footer={ (
            <Footer />
          ) }
        >
          {/*<MediaQuery maxSize={ MediaQuery.SIZES.DESKTOP }>*/}
            {/*{matcher => matcher && <SearchProduct { ...this.props } className="ProjectApp__searchInContent" />}*/}
          {/*</MediaQuery>*/}

          <TabsLayout tabs={ this.getTabsMenu() }>
            {children}
          </TabsLayout>

          {/*<CookieTermPopup />*/}
        </AppLayout>
      </div>
    );
  }
}
