import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bind from 'lodash-decorators/bind';

import { getUserId } from '@reagentum/front-core/lib/common/app-redux/selectors';
import contextModules from '@reagentum/front-core/lib/common/contexts/ContextModules/decorator-context-modules';

// import i18n from '../../i18n';

import MODULE_NAME from '../../module-name';
import {
  getPath<%=moduleNameCapital%>,
} from '../../routes-paths-<%=moduleNameKebab%>';

import getComponents from '../../get-components';

const {
  Button,
} = getComponents();

require('./<%=moduleNameCapital%>Page.scss');

@contextModules()
@connect(
  (globalState, props) => ({
    userId: getUserId(globalState),
  }),
)
export default class <%=moduleNameCapital%>Page extends Component {
  static propTypes = {
    // ======================================================
    // @contextModules
    // ======================================================
    getRoutePath: PropTypes.func,
    onGoTo: PropTypes.func,

    // ======================================================
    // CONNECT
    // ======================================================
    // userId: PropTypes.string,

    // ======================================================
    // ACTIONS
    // ======================================================
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
            onClick={ () => onGoTo(getPath<%=moduleNameCapital%>(), MODULE_NAME) }
          >
            Кнопка для <%=moduleNameCapital%>
          </Button>
        </div>
      </div>
    );
  }
}

