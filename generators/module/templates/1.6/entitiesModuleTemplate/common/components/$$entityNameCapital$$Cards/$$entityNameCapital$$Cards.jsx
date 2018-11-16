import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import bind from 'lodash-decorators/bind';

import {
  TABLE_PROP_TYPE,
} from '@reagentum/front-core/lib/common/models/model-table';

// import i18n from '../../i18n';

import MODULE_NAME from '../../module-name';
import {
  getPath<%=entityNameCapital%>,
} from '../../routes-paths-<%=moduleNameKebab%>';

import getComponents from '../../get-components';

const {
  Pagination,
  Card,

  <%=entityNameCapital%>Card,
} = getComponents();

require('./<%=entityNameCapital%>Cards.scss');

export default class <%=entityNameCapital%>Cards extends PureComponent {
  static propTypes = {
    table: TABLE_PROP_TYPE,
    tableId: PropTypes.string,
    actionLoadRecords: PropTypes.func,

    getFullPath: PropTypes.func,

    className: PropTypes.string,

    onEdit: PropTypes.func,
  };

  // ======================================================
  // HANDLERS
  // ======================================================
  @bind()
  handlePaginationChanged(event, { activePage }) {
    const {
      tableId,
      actionLoadRecords,
    } = this.props;
    return actionLoadRecords(tableId, { startPage: activePage - 1 });
  }

  // ======================================================
  // RENDERS
  // ======================================================
  render<%=moduleNameCapital%>() {
    const {
      table: {
        records = [],
      } = {},

      getFullPath,

      onEdit,
    } = this.props;

    return (
      <Card.Group>
        {
          records.map((record) => (
            <<%=entityNameCapital%>Card
              className="<%=entityNameCapital%>Cards__card"
              key={ record.id }
              <%=entityNameCamel%>={ record }
              <%=entityNameCamel%>Url={ getFullPath(getPath<%=entityNameCapital%>(record.id), MODULE_NAME) }
              onEdit={ onEdit }
            />
          ))
        }
      </Card.Group>
    );
  }

  renderPagination() {
    const {
      table: {
        meta: {
          startPage,
          itemsPerPage,
          total,
        },
      },
    } = this.props;

    const totalPages = Math.ceil(total / itemsPerPage);

    return totalPages > 1 && (
      <div className="<%=entityNameCapital%>Cards__pagination">
        <Pagination
          activePage={ startPage + 1 }
          totalPages={ Math.ceil(total / itemsPerPage) }
          onPageChange={ this.handlePaginationChanged }
        />
      </div>
    );
  }

  // ======================================================
  // MAIN RENDER
  // ======================================================
  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={ `<%=entityNameCapital%>Cards ${className || ''}` }>
        { this.render<%=moduleNameCapital%>() }
        { this.renderPagination() }
      </div>
    );
  }
}
