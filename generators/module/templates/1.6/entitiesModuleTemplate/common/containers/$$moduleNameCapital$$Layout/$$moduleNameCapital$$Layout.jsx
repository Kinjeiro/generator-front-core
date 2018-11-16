import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import bind from 'lodash-decorators/bind';

// import ACTION_STATUS_PROP from '@reagentum/front-core/lib/common/models/model-action-status';

// import i18n from '../../i18n';

import getComponents from '../../get-components';

const {
  // Modal,
  // Loading,
} = getComponents();

// import './<%=moduleNameCapital%>Layout.scss';

// @connect(
// )
export default class <%=moduleNameCapital%>Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    // ======================================================
    // @connect
    // ======================================================
  };

  state = {
  };

  // ======================================================
  // LIFECYCLE
  // ======================================================
  // componentDidMount() {
  // }
  // componentWillReceiveProps(newProps) {
  // }


  // ======================================================
  // HANDLERS
  // ======================================================
  // @bind()

  // ======================================================
  // RENDERS
  // ======================================================
  renderChildren() {
    const {
      children,
    } = this.props;
    return children;
  }

  // ======================================================
  // MAIN RENDER
  // ======================================================
  render() {
    return (
      <div className="<%=moduleNameCapital%>Layout">
        { this.renderChildren() }
      </div>
    );
  }
}
