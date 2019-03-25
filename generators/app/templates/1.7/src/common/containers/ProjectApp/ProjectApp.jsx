import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import bind from 'lodash-decorators/bind';

import { getModulesRoutePrefixes } from '@reagentum/front-core/lib/common/app-redux/selectors';

import i18n from '../../../modules/module-core/utils/i18n';

import {
  getUserMenu,
  getSidebarMenu,
  getUserProfileUrl,
  getTabsMenu,
} from './menu';

import getComponents from '../../get-components';

// import './ProjectApp.scss';

const {
  AppLayout,
  // MediaQuery,

  Footer,
  TabsLayout,
} = getComponents();

// так как мы подгружаем модуль AppLayout onDemand то стили нужно подгрузить позже, а не при импорте
require('./ProjectApp.scss');

@connect(
  (globalState) => ({
    moduleToRoutePrefixMap: getModulesRoutePrefixes(globalState),
  }),
)
export default class ProjectApp extends Component {
  static propTypes = {
    ...AppLayout.propTypes,
    moduleToRoutePrefixMap: PropTypes.object,
  };

  /*
   (
   <Icon
   name="user circle"
   />
   )
  */

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
      moduleToRoutePrefixMap,
    } = this.props;

    return (
      <div className="ProjectApp">
        <AppLayout
          { ...this.props }
          textTitle={ i18n('pages.AppLayout.title') }
          userMenu={ getUserMenu }
          sidebarMenu={ getSidebarMenu }
          ifMobileMoveUserMenuToSidebar={ false }

          headerProps={{
            headerTitle: i18n('pages.AppLayout.Header.title'),
            headerDescription: i18n('pages.AppLayout.Header.description'),
            profileUrl: getUserProfileUrl,
          }}
          sidebarProps={{
            inverted: false,
          }}

          upBottomButtonsProps={ true }
          footer={ (
            <Footer />
          ) }
        >
          <TabsLayout tabs={ getTabsMenu(moduleToRoutePrefixMap) }>
            { children }
          </TabsLayout>
        </AppLayout>
      </div>
    );
  }
}
