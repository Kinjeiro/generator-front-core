import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import bind from 'lodash-decorators/bind';

import getCb from '../../get-components';

// import i18n from '../../utils/i18n';

import './TabsLayout.scss';

const {
  MediaQuery,
  Tabs,
} = getCb();

export default class TabsLayout extends Component {
  static propTypes = {
    tabs: Tabs.propTypes.tabs,
    children: PropTypes.node,
  };

  static defaultProps = {
  };

  // ======================================================
  // LIFECYCLE
  // ======================================================
  // componentWllMount() {
  // }
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
  renderTabs() {
    const {
      tabs,
    } = this.props;

    return (
      <Tabs
        className="TabsLayout__tabs"
        tabs={ tabs }
        buttonLinkProps={{
          simple: true,
        }}
      />
    );
  }

  // ======================================================
  // MAIN RENDER
  // ======================================================
  render() {
    const {
      tabs,
      children,
    } = this.props;

    return tabs && tabs.length > 0
    ? (
      <div className="TabsLayout">
        <MediaQuery mobile={ false }>
          { this.renderTabs() }
        </MediaQuery>

        <div className="TabsLayout__content">
          { children }
        </div>
      </div>
    )
    : children;
  }
}
