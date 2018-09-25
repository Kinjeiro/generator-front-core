import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bind from 'lodash-decorators/bind';

import { findPath } from '@reagentum/front-core/lib/common/utils/tree-utils';
import { parseUrlParameters } from '@reagentum/front-core/lib/common/utils/uri-utils';
import {
  TABLE_PROP_TYPE,
} from '@reagentum/front-core/lib/common/models/model-table';
import { objectValues } from '@reagentum/front-core/lib/common/utils/common';
// import onPropsUpdate from '@reagentum/front-core/lib/common/utils/decorators/react-methods/on-props-update';
import reduxTableDecorator from '@reagentum/front-core/lib/common/utils/decorators/react-class/redux-table';
import { getUser } from '@reagentum/front-core/lib/common/app-redux/selectors';
import contextModules from '@reagentum/front-core/lib/common/contexts/ContextModules/decorator-context-modules';

// import i18n from '../../i18n';

import MODULE_NAME from '../../module-name';
import {
  PATH_<%=moduleNameUpper%>_NEW,
  getPath<%=entityNameCapital%>,
  getPath<%=moduleNameCapital%>,
} from '../../routes-paths-<%=moduleNameKebab%>';
import { tableActions } from '../../redux-<%=moduleNameKebab%>';

import getComponents from '../../get-components';

const {
  Button,
  <%=entityNameCapital%>Cards,
} = getComponents();

require('./<%=moduleNameCapital%>Page.scss');

const DEFAULT_META = {
  sortBy: 'name',
  sortDesc: true,
};

@contextModules()
@connect(
  (globalState, props) => {
    const user = getUser(globalState);
    return {
      userId: user && user.username,
    };
  },
)
@reduxTableDecorator(
  '<%=entityNameUpper%>S',
  {
    initMeta: DEFAULT_META,
    tableActions,
  },
)
export default class <%=moduleNameCapital%>Page extends Component {
  static propTypes = {
    // ======================================================
    // @contextModules
    // ======================================================
    // getFullPath: PropTypes.func,
    onGoTo: PropTypes.func,

    // ======================================================
    // @reduxTableDecorator
    // ======================================================
    /*
     records: _propTypes2.default.array,
     meta: _propTypes2.default.shape({
       search: _propTypes2.default.string,
       startPage: _propTypes2.default.number,
       itemsPerPage: _propTypes2.default.number,
       sortBy: _propTypes2.default.string,
       sortDesc: _propTypes2.default.bool,
       total: _propTypes2.default.number
     }),
     filters: _propTypes2.default.object,
     selected: _propTypes2.default.arrayOf(_modelId2.default),
     isSelectedAll: _propTypes2.default.bool,

     actionLoadRecordsStatus: _modelActionStatus2.default,
     actionBulkChangeStatusStatus: _modelActionStatus2.default,
     actionEditRecordStatusMap: _propTypes2.default.object
    */
    // table: TABLE_PROP_TYPE,
    // tableId: PropTypes.string,
    // initMeta: PropTypes.object,
    // initFilers: PropTypes.object,

    // ======================================================
    // CONNECT
    // ======================================================
    // userId: PropTypes.string,

    // ======================================================
    // ACTIONS
    // ======================================================
    // actionLoadRecords: PropTypes.func,
    // actionClearFilters: PropTypes.func,
  };

  // ======================================================
  // LIFECYCLE
  // ======================================================
  // componentWillReceiveProps(newProps) {
  // }

  // ======================================================
  // HANDLERS
  // ======================================================
  // @bind()


  // ======================================================
  // RENDERS
  // ======================================================

  // ======================================================
  // MAIN RENDER
  // ======================================================
  render() {
    const {
      onGoTo,
    } = this.props;

    return (
      <div className="<%=moduleNameCapital%>Page">
        <div>
          <Button
            primary={ true }
            onClick={ () => onGoTo(PATH_<%=moduleNameUpper%>_NEW, MODULE_NAME) }
          >
            Создать
          </Button>
        </div>
        <<%=entityNameCapital%>Cards { ...this.props } />
      </div>
    );
  }
}

