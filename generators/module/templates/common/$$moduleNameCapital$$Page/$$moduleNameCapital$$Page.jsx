import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bind from 'lodash-decorators/bind';
import { Card } from 'semantic-ui-react';

// import { objectValues } from '@reagentum/front-core/lib/common/utils/common';
import reduxTableDecorator from '@reagentum/front-core/lib/common/utils/decorators/react-class/redux-table';
import { formatDate } from '@reagentum/front-core/lib/common/utils/date-utils';
import { TABLE_PROP_TYPE } from '@reagentum/front-core/lib/common/models';
import contextModules from '@reagentum/front-core/lib/common/contexts/ContextModules/decorator-context-modules';
// import onPropsUpdate from '@reagentum/front-core/lib/common/utils/decorators/react-methods/on-props-update';
import ModuleLink from '@reagentum/front-core/lib/common/containers/ModuleLink/ModuleLink';

// import { NAMESPACE } from '../../../module-core/utils/i18n';

import MODULE_NAME from '../module-name';
import {
  getPath<%=entityNameCapital%>,
} from '../routes-paths-<%=moduleNameKebab%>';
import { actions } from '../redux-<%=moduleNameKebab%>';

import './<%=moduleNameCapital%>Page.scss';

const TABLE_ID = '<%=moduleName%>';

@contextModules()
@connect(
  (globalState, props) => ({}),
)
@reduxTableDecorator(TABLE_ID, { tableActions: actions })
export default class <%=moduleNameCapital%>Page extends PureComponent {
  static propTypes = {
    // ======================================================
    // PROPS
    // ======================================================

    // ======================================================
    // @contextModules
    // ======================================================
    getFullPath: PropTypes.func,

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
    table: TABLE_PROP_TYPE,

    // ======================================================
    // CONNECT
    // ======================================================

    // ======================================================
    // ACTIONS
    // ======================================================
    actionLoadRecords: PropTypes.func,
  };

  static defaultProps = {
  };

  // ======================================================
  // LIFECYCLE
  // ======================================================
  componentWillMount() {
    this.props.actionLoadRecords(TABLE_ID);
  }

  // ======================================================
  // HANDLERS
  // ======================================================
  // @bind()

  // ======================================================
  // RENDERS
  // ======================================================
  render<%=entityNameCapital%>Card(tiding) {
    const {
      id,
      title,
      body,
      authorId,
      authorName,
      postedDate,
    } = tiding;

    return (
      <Card
        key={ id }
        className="<%=entityNameCapital%>Card"
      >
        <Card.Content>
          <Card.Header className="<%=entityNameCapital%>Card__name">
            <ModuleLink
              modulePath={ getPath<%=entityNameCapital%>(id) }
              moduleName={ MODULE_NAME }
            >
              { title }
            </ModuleLink>
          </Card.Header>
          <Card.Meta className="<%=entityNameCapital%>Card__postedDate">
            { formatDate(postedDate) }
          </Card.Meta>
          <Card.Meta className="<%=entityNameCapital%>Card__author">
            {
              authorId
                ? (
                  <ModuleLink
                    modulePath={ moduleProfile.paths.getPathProfile(authorId) }
                    moduleName={ moduleProfile.MODULE_NAME }
                  >
                    { authorName || authorId }
                  </ModuleLink>
                )
                : authorName
            }
          </Card.Meta>
          {
            body && (
              <Card.Description className="<%=entityNameCapital%>Card__body">
                { body }
              </Card.Description>
            )
          }
        </Card.Content>
      </Card>
    );
  }
  // ======================================================
  // MAIN RENDER
  // ======================================================
  render() {
    const {
      table,
    } = this.props;

    return (
      <div className="<%=moduleNameCapital%>Page">
        <h2><%=moduleNameCapital%>Page</h2>
        {
          table && (
            <Card.Group>
              {
                table.records.map((record) =>
                  this.render<%=entityNameCapital%>Card(record))
              }
            </Card.Group>
          )
        }
      </div>
    );
  }
}

